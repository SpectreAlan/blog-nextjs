import React from "react";
import {Col, Row} from "antd";
import Link from 'next/link';
import {FolderOpenOutlined} from "@ant-design/icons";

const RecentUpdate: React.FC<{ categoryList: Aside.Category[] }> = ({categoryList}) => {
    return <div className="p-4 rounded-lg mb-4 overflow-hidden text-center fuck-shadow">
        <div className='text-left mb-2 font-bold'><FolderOpenOutlined className='mr-2' rev=''/>分类</div>
        {
            categoryList.map((item) => (
                <Link
                    href={`/?category=${item.category}#article-list`}
                    as={`/?category=${item.category}#article-list`}
                    key={item.category}
                >
                    <Row className='py-1 text-left hover:bg-blue-500 hover:text-white hover:px-2 hover:rounded' gutter={8}>
                        <Col span={20}>
                            {item.category}
                        </Col>
                        <Col span={4} className='text-right'>
                            {item.count}
                        </Col>
                    </Row>
                </Link>
            ))
        }
    </div>
}

export default RecentUpdate