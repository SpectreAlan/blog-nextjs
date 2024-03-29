import React from 'react'
import httpRequest from "@/utils/fetch";
import Nav from '@/app/detail/[id]/Nav'
import Title from '@/app/detail/[id]/Title'
import Content from '@/app/detail/[id]/Content'
import Recommend from '@/app/detail/[id]/Recommend'
import Comment from '@/app/detail/[id]/Comment'
import Error from '@/app/layout/error'
import {Metadata} from 'next'
import DefaultMetadata from '@/utils/metadata'

type Props = {
    params: { id: string }
}

export async function generateMetadata(
    {params}: Props
): Promise<Metadata> {
    const detail: Article.Detail | null = await httpRequest({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/detail`,
        data: params,
        options: {
            cache: 'no-store'
        }
    })
    if (detail) {
        const {title, description, category, tags} = detail
        return {
            title,
            description,
            category: category.title,
            keywords: tags.map(item => item.title).join(',')
        }
    }
    return DefaultMetadata
}

const DetailPage = async ({params}: { params: { id: string } }) => {
    const {id} = params
    const detail: Article.Detail | null = await httpRequest({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/detail`,
        data: {id},
        options: {
            cache: 'no-store'
        }
    })
    if (!detail) {
        return <Error status='500'/>
    }
    const {content, tags, catalogue} = detail
    const tagsString = tags.map(tag => tag.title).join(',')
    return <div className={`${catalogue ? 'lg:pl-80' : ''} relative`}>
        {
            catalogue && <Nav content={content}/>
        }
        <Title detail={detail}/>
        <div className='px-4'>
            <Content content={content}/>
            <Recommend tags={tagsString} id={id}/>
            <Comment id={id}/>
        </div>
    </div>
}

export default DetailPage