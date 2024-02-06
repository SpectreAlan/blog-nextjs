import React from "react";
import {Col, Row} from "antd";
import Link from 'next/link';
import {FieldTimeOutlined} from "@ant-design/icons";
import Image from 'next/image'

const RecentUpdate: React.FC<{ articles: Article.ArticleItem[] }> = ({articles}) => {
    return <div className="p-4 rounded-lg mb-4 overflow-hidden text-center fuck-shadow">
        <div className='text-left mb-2 font-bold'><FieldTimeOutlined className='mr-2' rev=''/>最近更新</div>
        {
            articles.map((item, index) => (
                <Link href={'/detail/' + item.id} prefetch key={item.id}>
                    <Row className='py-2 text-left border-b border-dashed border-gray-500 border-l-0 border-t-0 border-r-0' gutter={8}>
                        <Col span={8}>
                            <Image src={item.cover} alt={item.title} width={88} height={55}/>
                        </Col>
                        <Col span={15} offset={1}>
                            <div className='font-bold h-10'>{item.title}</div>
                            <i className='text-gray-400 text-sm'>{item.createdAt}</i>
                        </Col>
                    </Row>
                </Link>
            ))
        }
    </div>
}

export default RecentUpdate