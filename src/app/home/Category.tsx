import React from "react";
import {Col, Row} from "antd";
import Link from 'next/link';
import {FolderOpenOutlined} from "@ant-design/icons";

const RecentUpdate: React.FC<{ categoryList: Aside.Category[] }> = ({categoryList}) => {
    return <div className="p-4 rounded-lg mb-4 overflow-hidden text-center fuck-shadow">
        <div className='text-left mb-2'><FolderOpenOutlined className='mr-2' rev=''/>分类</div>
        {
            categoryList.map((item, index) => (
                <Link
                    href={`/?current=1&category=${item.category}`}
                    as={`\`/?current=1&category=${item.category}`}
                    key={index}
                >
                    <Row className='py-1 text-left hover:bg-blue-500 hover:text-white hover:px-2' key={index} gutter={8}>
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