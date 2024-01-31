import React from 'react'
import {Row, Col} from 'antd';
import {InboxOutlined, ScheduleOutlined} from '@ant-design/icons';
import Link from 'next/link'
import httpRequest from "@/utils/fetch";
import Image from 'next/image'

const ArticleList: React.FC<Common.IProps> = async ({searchParams}) => {
    const current = searchParams?.current ?? 1
    const res: { list: Article.ArticleItem[], total: number } | null = await httpRequest({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/list`,
        data: {current}
    })
    return <>
        {
            res?.list?.map((item, index) => (
                <div key={index} className='p-2'>
                    <Row className='rounded-md mb-4 overflow-hidden shadow-md transition-shadow hover:shadow-lg'>
                        <Col lg={8} md={8} sm={0} xs={0} className='overflow-hidden'>
                            <Image src={item.cover} alt={item.title} width={276} height={158} loading="lazy"/>
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
        {
            res?.total && <div className="flex justify-center items-center mb-2">
                <span className='mr-2'>Total {res.total} items</span>
                {
                    Array.from({length: Math.ceil(res.total / 10)}, (_, i) => i + 1).map((_) => <Link href={`/?current=${_}`} as={`/?current=${_}`}
                        className={`mr-2 bg-white border border-solid border-gray-300 rounded cursor-pointer px-3 py-1 ${Number(current) === _ ? 'border-blue-400 text-blue-400' : ''}`}
                        key={_}>{_}</Link>)
                }
            </div>
        }
    </>
};
export default ArticleList
