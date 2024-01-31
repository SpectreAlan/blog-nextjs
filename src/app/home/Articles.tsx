import React from 'react'
import {Row, Col} from 'antd';
import {InboxOutlined, ScheduleOutlined} from '@ant-design/icons';
import Link from 'next/link'
import httpRequest from "@/utils/fetch";

const ArticleList: React.FC<Common.IProps> = async ({searchParams}) => {
    const res: { list: Article.ArticleItem[], total: number } | null = await httpRequest({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/list`,
        data: {current: searchParams?.current ?? 1}
    })
    return <>
        {
            res?.list?.map((item, index) => (
                <div key={index} className='p-2'>
                    <Row className='rounded-md mb-4 overflow-hidden shadow-md transition-shadow hover:shadow-lg'>
                        <Col lg={8} md={8} sm={0} xs={0} className='overflow-hidden relative'>
                            <img src={item.cover} alt={item.title}/>
                        </Col>
                        <Col lg={16} md={16} sm={24} xs={24} className='p-2 '>
                            <Link href={'/detail?id=' + item.id} as={`/detail/${item.id}`}>
                                <h2 className='text-center cursor-pointer'>{item.title}</h2>
                            </Link>
                            <p className='text-center'>
                                <ScheduleOutlined/> {item.createdAt} | <InboxOutlined/>
                                <span>{item.category.title}</span>
                            </p>
                            <div className='text-left h-130 overflow-hidden whitespace-nowrap overflow-ellipsis'>
                                {item.description}
                            </div>
                        </Col>
                    </Row>
                </div>
            ))
        }
    </>
};
export default ArticleList
