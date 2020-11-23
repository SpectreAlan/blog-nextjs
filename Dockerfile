FROM node:12.18.0-buster-slim
COPY dist .
WORKDIR .
RUN npm i
EXPOSE 3000
CMD ["node","server.js"]
