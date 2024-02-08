import React from "react";
import {Col, Row, Tooltip} from "antd";
import {BookOutlined, GithubOutlined, MailOutlined, TwitterOutlined} from "@ant-design/icons";
import Image from "next/image";

const Profile: React.FC<{ aside: Aside.Items }> = ({aside}) => {
    return <div className="p-4 rounded-lg mb-4 overflow-hidden text-center fuck-shadow mt-4">
        <Image alt='logo' width={44} height={44} src='/image-proxy/blog/common/logo.png'/>
        <h2>SpectreAlan</h2>
        <p>如果第一次失败了，那这是1.0版本，请继续努力</p>
        <Row>
            <Col span={8}><span className='font-bold'>文章</span> <a href="#article-list" className='text-blue-600'><p>{aside.totalArticle}</p>
            </a> </Col>
            <Col span={8}><span className='font-bold'>标签</span>  <a href="#tags" className='text-blue-600'><p>{aside.tags.length}</p></a>
            </Col>
            <Col span={8}><span className='font-bold'>分类</span> <a href="#category" className='text-blue-600'><p>{aside.categoryList.length}</p></a>
            </Col>
        </Row>
        <div
            className="my-2 py-1 cursor-pointer relative z-10 bg-blue-500 text-white uppercase leading-6 rounded"
            title='请使用浏览器的添加书签功能（通常是按 Ctrl+D 或 Command+D）手动将网站添加到书签。'
        >
            <BookOutlined className='mr-3' rev=''/>加入书签
        </div>
        <div className="flex justify-around text-2xl my-4">
            <Tooltip title='SpectreAlan'>
                <a href="https://github.com/SpectreAlan" target="_blank"><GithubOutlined rev=''/></a>
            </Tooltip>
            <Tooltip title='comjszoo@gmail.com'>
                <a href="mailto:comjszoo@gmail.com" target="_blank"><MailOutlined rev=''/></a>
            </Tooltip>
            <Tooltip title='SpectreAlan'>
                <a href="https://twitter.com/SpectreAlan" target="_blank"><TwitterOutlined rev=''/></a>
            </Tooltip>
        </div>
    </div>
}

export default Profile