import React from "react";
import {Col, Row} from "antd";
import Link from 'next/link';
import {FieldTimeOutlined} from "@ant-design/icons";

const RecentUpdate: React.FC<{ recentUpdate: Article.ArticleItem[] }> = ({recentUpdate}) => {
    return <div className="p-4 rounded-lg mb-4 overflow-hidden text-center fuck-shadow">
        <div className='text-left mb-2'><FieldTimeOutlined className='mr-2'/>最近更新</div>
        {
            recentUpdate.map((item, index) => (
                <Link href={{pathname: '/detail', query: {id: item.id}}} key={index}>
                    <Row className='item' gutter={8}>
                        <Col span={8}>
                            <img src={item.cover} alt=""/>
                        </Col>
                        <Col span={14}>
                            <h4>{item.title}</h4>
                            <i>{item.updatedAt}</i>
                        </Col>
                    </Row>
                </Link>
            ))
        }
    </div>
}

export default RecentUpdate