import React from 'react'
import { Timeline} from 'antd'
import Link from 'next/link'
import httpRequest from "@/utils/fetch";
import Image from 'next/image'

const TimeLinePage = async () => {
    const res: { list: Article.ArticleItem[] } | null = await httpRequest({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/timeLine`,
    })
    if (!res) {
        return null
    }
    return (
        <>
            <div
                className="h-80 bg-cover bg-center bg-fixed relative"
                style={{backgroundImage: `url(/image-proxy/blog/cover/${new Date().getDate()}.jpg)`}}
            >
                <p className='w-full absolute top-1/2 text-center transform -translate-y-1/2 lg:text-4xl text-xl font-bold text-white'>流年不念终将安，时光不老你还在</p>
            </div>
            <div className='px-4 pt-4'>
                <div className='md:w-[1100px] mx-auto pt-16 fuck-shadow rounded'>
                    <Timeline
                        mode="alternate"
                        items={
                            res.list.map((article, i) => ({
                                label: article.createdAt,
                                children: <Link
                                    className={`flex flex-wrap items-center transform -translate-y-[30px] ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}
                                    href={`/detail/${article.id}`}
                                    prefetch
                                >
                                    <Image
                                        src={article.cover}
                                        alt={article.title}
                                        width={140}
                                        height={80}
                                        loading="lazy"
                                        className='rounded-md hover:scale-105 mr-2 mb-2'
                                    />
                                    <div>{article.title}</div>
                                </Link>
                            }))
                        }
                    />
                </div>
            </div>
        </>
    )
}
export default TimeLinePage
