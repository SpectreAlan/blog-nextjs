import React from 'react'
import {Descriptions, DescriptionsProps, Divider} from 'antd'

import {GithubOutlined, TwitterOutlined} from '@ant-design/icons'
import {Metadata} from "next";

export const metadata: Metadata = {
    title: '关于 - SpectreAlan',
    description: '近些年一直从事web前端开发工作，熟悉前端主要技术栈，平时喜欢研究web前端、服务器方面的各种技术',
    keywords: 'vercel,NestJS,NextJS,Umi Max,MongoDb,阿里云OSS,Antd,Sass'
};

const About = () => {
    const me: DescriptionsProps['items'] = [
        {
            key: 'name',
            label: 'Name',
            children: 'SpectreAlan'
        },
        {
            key: 'email',
            label: 'Email',
            children: 'comjszoo@gmail.com'
        },
        {
            key: 'hometown',
            label: 'Hometown',
            children: '四川 - 成都'
        },
        {
            key: 'live',
            label: 'Live',
            children: 'Singapore'
        },
        {
            key: 'contacts',
            label: 'Other Contacts',
            children: <>
                <a href="https://github.com/SpectreAlan" target="_blank" title='SpectreAlan' className='mr-4'>
                    <GithubOutlined rev='' className='text-2xl'/>
                </a>
                <a href="https://twitter.com/SpectreAlan" target="_blank" title='SpectreAlan'>
                    <TwitterOutlined rev='' className='text-2xl'/>
                </a>
            </>
        },
        {
            key: 'summary',
            label: 'Summary',
            children: metadata.description
        },
        {
            key: 'web',
            label: 'Skills - 前端',
            children: <>
                技术栈：Vue、React<br/>
                UI框架：ElementUI、Vant、Antd-design等<br/>
                移动端：Flutter、React Native、UniApp、Taro
            </>
        },
        {
            key: 'backed',
            label: 'Skills - 后端',
            children: <>
                主要技术栈：NodeJs、Mysql、MongoDB<br/>
                框架：NestJS、Koa2、Egg.js
            </>
        }
    ]
    const blog: DescriptionsProps['items'] = [
        {
            key: '1',
            label: '博客前台',
            children: <> 基于Next.js 14.1开发 <br/>
                UI层使用Antd、Sass、Tailwind<br/>
                数据请求使用Fetch<br/>
                解析markdown采用 marked<br/>
                生成文章目录使用 markdown-navbar ，语法高亮 highlight.js</>,
        },
        {
            key: 'blog-nextjs',
            label: '前台源码',
            children: <a href="https://github.com/SpectreAlan/blog-nextjs" target="_blank">
                <img
                    className='w-full'
                    src="https://github-readme-stats.vercel.app/api/pin/?username=SpectreAlan&repo=blog-nextjs&theme=react"
                    alt="blog-nextjs"/>
            </a>
        },
        {
            key: '3',
            label: '后台管理系统',
            children: <>基于Umijs max开发<br/>
                UI层使用 @ant-design/pro-components<br/>
                图表采用react-echarts<br/>
                新建/编辑文章使用 @toast-ui/editor</>
        },
        {
            key: 'blog-admin-umijs-max',
            label: '后台管理源码',
            children: <a href="https://github.com/SpectreAlan/blog-admin-umijs-max" target="_blank">
                <img
                    className='w-full'
                    src="https://github-readme-stats.vercel.app/api/pin/?username=SpectreAlan&repo=blog-admin-umijs-max&theme=blueberry"
                    alt="blog-admin-umijs-max"/>
            </a>
        },
        {
            key: '5',
            label: '中台数据接口',
            children: <>基于NestJS + MongoDB开发<br/>
                所有的图片使用阿里云OSS存储<br/>
                定时任务每天获取一言、Bing壁纸<br/>
                响应数据通过crypto-js加密<br/>
                后台服务通过Vercel免费部署<br/>
                数据库使用MongoDB Cloud免费部署</>
        },
        {
            key: 'blog-server-nestjs-vercel',
            label: '中台源码',
            children: <a href="https://github.com/SpectreAlan/blog-server-nestjs-vercel" target="_blank">
                <img
                    className='w-full'
                    src="https://github-readme-stats.vercel.app/api/pin/?username=SpectreAlan&repo=blog-server-nestjs-vercel&theme=chartreuse-dark"
                    alt="blog-server-nestjs-vercel"/>
            </a>
        },
    ]
    return <>
        <div
            className="h-80 bg-cover bg-center bg-fixed relative"
            style={{backgroundImage: `url(/image-proxy/blog/cover/${new Date().getDate()}.jpg)`}}
        >
            <div className='bg-black bg-opacity-50 absolute w-full h-full'/>
            <p className='w-full absolute top-1/2 text-center transform -translate-y-1/2 lg:text-4xl text-xl font-bold text-white'>关于我
                - SpectreAlan</p>
        </div>
        <div className='px-4 pt-4'>
            <div className='md:w-[1100px] mx-auto p-4 fuck-shadow rounded'>
                <Descriptions title="关于我的博客" column={{xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2}} layout="vertical" items={blog}/>
                <Divider/>
                <Descriptions title="关于我" column={{xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2}} layout="vertical" items={me}/>
            </div>
        </div>
    </>
}
export default About
