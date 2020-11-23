## 项目介绍
基于nextjs搭建的个人博客,闲来无事SSR练手，线上[预览地址](https://jrsee.com)
## 项目打包
```sh
# pulls仓库
git clone https://github.com/SpectreAlan/blog_nextjs.git
# 修改接口路径，目录：/api/index.js
# 进入项目目录
cd blog_nextjs
# 安装依赖
npm install
# 打包
npm run build
# 创建dist目录
mkdir dist
# copy部署文件到dist
cp -r {build,seo,server.js,package.json,next.config.js} dist
```
## 部署
### 常规部署
```sh
# 将dist目录copy到服务器的某个目录，如：/data/www/blog/dist
# 服务器安装pm2
npm install pm2 -g
# 进入项目目录
cd /data/www/blog/dist
# 通过pm2启动项目
pm2 start server.js --name blog
# 设置pm2开机启动(服务器重启后项目自启)
pm2 startup
# 保存项目进程
pm2 save
```
### docker部署
- 创建Dockerfile
项目根目录创建Dockerfile文件,ps：无文件后缀，文件内容如下：
```sh
FROM node:12.18.0-buster-slim
COPY dist .
WORKDIR .
RUN npm i
EXPOSE 3000
CMD ["node","server.js"]
```
Dockerfile编写规则可以参考官方文档
- 打包镜像
```sh
docker build -t 镜像名称[:tag] ./
# 如：docker build -t blog:1.0 ./
# 运行
docker run 镜像的标识|镜像的名称[:tag]
# 如: docker run blog:1.0
```
### github actions 持续部署
#### github配置
- 进入github仓库，点击操作面板Actions按钮
- 找到Node.js模块，点击Set up this workflow
- 编辑内容:
```yml
name: Docker Image CI/CD
on:
  push:
    branches: [ master ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build project
        run:
          npm install;
          npm run build;
          mkdir dist;
          cp -r {build,seo,server.js,package.json,next.config.js} dist;
      - name: Build Image
        run: docker build -t ${{ secrets.DOCKER_REPOSITORY }}:latest ./
      - name: Login to registry
        run: docker login --username=${{ secrets.DOCKER_USERNAME }} --password ${{ secrets.DOCKER_PASSWORD }} registry.cn-hangzhou.aliyuncs.com
      - name: Push Image
        run: docker push ${{ secrets.DOCKER_REPOSITORY }}:latest
  pull-docker:
    needs: [build]
    name: Pull Docker
    runs-on: ubuntu-latest
    steps:
      - name: Deploy
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.HOST_USERNAME }}
          password: ${{ secrets.HOST_PASSWORD }}
          port: ${{ secrets.HOST_PORT }}
          script: |
            cd /data/docker
            docker-compose stop blog_web
            docker rm -f $(docker ps -a --filter ancestor=${{ secrets.DOCKER_REPOSITORY }}:latest -q)
            docker rmi -f $(docker images ${{ secrets.DOCKER_REPOSITORY }}:latest -q)
            docker login --username=${{ secrets.DOCKER_USERNAME }} --password ${{ secrets.DOCKER_PASSWORD }} registry.cn-hangzhou.aliyuncs.com
            docker pull ${{ secrets.DOCKER_REPOSITORY }}:latest
            docker-compose up -d --build

```
#### 服务器配置
```sh
# 创建/data/docker目录
mkdir -p /data/docker
cd /data/docker
# 创建docker-compose.yml文件
touch docker-compose.yml
```
编辑docker-compose.yml文件，内容如下:
```yml
# docker-compose.yml
version: '3.1'
services:
  mysql:
    restart: always
    image: daocloud.io/library/mysql:5.7.4
    container_name: mysql
    ports:
      - 3306:3306
    environment:
      MYSQL_ROOT_PASSWORD: YOURMYSQLPASSWORD
      TZ: Asia/Shanghai
    volumes:
      - /data/docker/mysql/data:/var/lib/mysql
  nginx:
    restart: always
    image: daocloud.io/library/nginx:1.18.0-alpine
    container_name: nginx
    ports:
      - 80:80
      - 443:443
    volumes:
      - /data/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf
      - /data/docker/nginx/logs:/var/log/nginx
      - /data/docker/nginx/pem:/etc/nginx/pem
      - /data/www:/usr/share/nginx/html
  blog_server:
    restart: always
    image: registry.cn-hangzhou.aliyuncs.com/alangrady/blog_server:latest
    container_name: blog_server
    ports:
      - 4000:4000
  blog_web:
    restart: always
    image: registry.cn-hangzhou.aliyuncs.com/alangrady/blog_web:latest
    container_name: blog_web
    ports:
      - 3000:3000
```
创建nginx.conf
```sh
# /data/docker/nginx/conf/nginx.conf
user  nginx;
worker_processes  1;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    keepalive_timeout  65;

    gzip  on;
    server {
        listen       80;
        server_name console.jrsee.com;
        location / {
             root   /usr/share/nginx/html/console;
             index  index.html index.htm;
        }
        location /admin/ {
             proxy_pass http://blog_server:4000/;
        }
    }
    server {
         listen       80;
         server_name note.jrsee.com;
         location / {
                root   /usr/share/nginx/html/note;
                index  index.html index.htm;
         }
    }
    server {
        listen       80;
        server_name jrsee.com www.jrsee.com;
        location / {
            rewrite     ^  https://$host$request_uri? permanent;
            proxy_pass http://blog_web:3000;
            proxy_set_header   Host             $host;
            proxy_set_header   X-Real-IP        $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
        }
        location /web/ {
            proxy_pass http://blog_server:4000;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $http_host;
            proxy_set_header X-NginX-Proxy true;
        }
    }
    server {
         listen     443 ssl;
         server_name jrsee.com www.jrsee.com;
         ssl_certificate /etc/nginx/pem/jrsee.com/fullchain1.pem;
         ssl_certificate_key /etc/nginx/pem/jrsee.com/privkey1.pem;
         ssl_protocols TLSv1.2 TLSv1.3;
         ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
         ssl_ecdh_curve secp384r1;
         ssl_prefer_server_ciphers on;
         ssl_session_cache shared:SSL:10m;
         ssl_session_timeout 10m;
         ssl_session_tickets off;
         keepalive_timeout 70;
         location / {
                 proxy_pass http://blog_web:3000;
         }
         location /web/ {
             proxy_pass http://blog_server:4000;
             proxy_set_header X-Real-IP $remote_addr;
             proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
             proxy_set_header Host $http_host;
             proxy_set_header X-NginX-Proxy true;
         }
    }
    server {
         listen     443 ssl;
         server_name console.jrsee.com;
         ssl_certificate /etc/nginx/pem/console.jrsee.com/fullchain1.pem;
         ssl_certificate_key /etc/nginx/pem/console.jrsee.com/privkey1.pem;
         ssl_protocols TLSv1.2 TLSv1.3;
         ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
         ssl_ecdh_curve secp384r1;
         ssl_prefer_server_ciphers on;
         ssl_session_cache shared:SSL:10m;
         ssl_session_timeout 10m;
         ssl_session_tickets off;
         keepalive_timeout 70;
         location / {
            root   /usr/share/nginx/html/console;
         }
         location /admin/ {
            proxy_pass http://blog_server:4000/;
         }
    }
}

```
