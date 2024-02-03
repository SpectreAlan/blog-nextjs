import React from "react";
import {Col, Row, Tooltip} from "antd";
import {BookOutlined, GithubOutlined, MailOutlined, TwitterOutlined} from "@ant-design/icons";
import Image from "next/image";

const Profile: React.FC<{ aside: Aside.Items }> = ({aside}) => {
    return <div className="p-4 rounded-lg mb-4 overflow-hidden text-center fuck-shadow mt-4">
        <Image alt='logo'  width={44} height={44} src='/image-proxy/blog/common/logo.png'/>
        <h2>AlanGrady</h2>
        <p>如果第一次失败了，那这是1.0版本，请继续努力</p>
        <Row>
            <Col span={8}>文章 <a href="#article-list" className='text-blue-600'><p>{aside.totalArticle}</p>
            </a> </Col>
            <Col span={8}>标签 <a href="#tags" className='text-blue-600'><p>{aside.tags.length}</p></a>
            </Col>
            <Col span={8}>分类 <a href="#category" className='text-blue-600'><p>{aside.categoryList.length}</p></a>
            </Col>
        </Row>
        <div className="my-2 py-1 cursor-pointer relative z-10 bg-blue-500 text-white uppercase leading-6 rounded">
            <BookOutlined className='mr-3' rev=''/>加入书签
        </div>
        <div className="flex justify-around text-2xl my-4">
            <Tooltip title='SpectreAlan'><a href="https://github.com/SpectreAlan" target="_blank"><GithubOutlined/></a></Tooltip>
            <Tooltip title='comjszoo@gmail.com@gmail.com'><a href="mailto:comjszoo@gmail.com"
                                                             target="_blank"><MailOutlined/></a></Tooltip>
            <Tooltip title='SpectreAlan'><a href="https://twitter.com/SpectreAlan"
                                            target="_blank"><TwitterOutlined/></a></Tooltip>
        </div>
    </div>
}

export default Profile