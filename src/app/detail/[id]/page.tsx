import React from 'react'
import httpRequest from "@/utils/fetch";
import Nav from '@/app/detail/[id]/Nav'
import Title from '@/app/detail/[id]/Title'
import Content from '@/app/detail/[id]/Content'
import Recommend from '@/app/detail/[id]/Recommend'
import Comment from '@/app/detail/[id]/Comment'

const DetailPage = async ({params}: { params: { id: string } }) => {
    const {id} = params
    const detail: Article.Detail | null = await httpRequest({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/detail`,
        data: {id}
    })
    if (!detail) {
        return null
    }
    const {content, tags} = detail
    const tagsString = tags.map(tag => tag.title).join(',')
    return <div className='lg:pl-80 relative'>
        <Nav content={content}/>
        <Title detail={detail}/>
        <div className='px-4'>
            <Content content={content}/>
            <Recommend tags={tagsString} id={id}/>
            <Comment id={id}/>
        </div>
    </div>
}

export default DetailPage