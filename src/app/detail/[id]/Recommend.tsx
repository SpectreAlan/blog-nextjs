import React from 'react'
import {Divider} from 'antd'
import httpRequest from "@/utils/fetch";
import {LikeFilled} from '@ant-design/icons'
import Link from 'next/link'
import Image from 'next/image'

const Recommend: React.FC<{ tags: string, id: string }> = async ({tags, id}) => {
    const res: { list: Article.ArticleItem[] } | null = await httpRequest({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/related`,
        data: {tags}
    })
    if (!res) {
        return null
    }
    const recommend: Article.ArticleItem[] = res.list.filter(article => article.id !== id)
    return <>
        <Divider/>
        <div className='md:max-w-[1000px] mx-auto p-8 fuck-shadow rounded'>
            <div className='text-xl font-bold mb-4'><LikeFilled/> 相关推荐</div>
            <div className="flex flex-wrap gap-8">
                {
                    recommend.map((article, i) => (
                        <Link
                            className='pb-4 fuck-shadow rounded overflow-hidden'
                            key={article.id}
                            href={`/detail/${article.id}`}
                            as={`/detail/${article.id}`}
                        >
                            <div className="w-[310px] overflow-hidden">
                                <Image
                                    src={article.cover}
                                    alt={article.title}
                                    width={310}
                                    height={170}
                                    loading="lazy"
                                    className='hover:scale-105'
                                />
                                <div
                                    className="overflow-hidden text-md font-semibold text-black/85 whitespace-nowrap overflow-ellipsis px-4 py-2">{article.title}</div>
                                <span className="text-sm text-gray-400 px-4">{article.createdAt}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    </>
}

export default Recommend