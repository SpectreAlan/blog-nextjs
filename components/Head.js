import React from 'react';
import Head from 'next/head';
import '../static/js/canvas'

const MyHead = (props) => {
  const defaultHead = {
    keywords: 'AlanGrady,web前端,nginx,linux,nodejs,vue,react,flutter,react-hooks',
    article_des: 'AlanGrady的个人博客，一个有内涵的web前端，专注vue/react/nodejs/flutter',
    article_title: "个人技术分享小站",
  }
  const head = props.info || defaultHead
  return (
    <Head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1"/>
      <meta httpEquiv='Content-Security-Policy' content='block-all-mixed-content' />
      <meta name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
      <meta name="renderer" content="webkit"/>
      <meta name="keywords" content={head.keywords}/>
      <meta name="Description" content={head.article_des}/>
      <meta name="author" content="AlanGrady"/>
      <link rel='shortcut icon' type='image/x-icon' href='image-base-url/blog/common/favicon.ico' />
      <meta name="sogou_site_verification" content="RSa1MBtgZI"/>
      <title key="viewport">{head.article_title}</title>
    </Head>
  )
}
export default MyHead
