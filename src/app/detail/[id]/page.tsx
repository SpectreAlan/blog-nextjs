import React from 'react'
import httpRequest from "@/utils/fetch";
import Nav from '@/app/detail/[id]/Nav'
import Title from '@/app/detail/[id]/Title'
import Content from '@/app/detail/[id]/Content'

const DetailPage = async ({params}: { params: { id: string } }) => {
    const detail: Article.Detail | null = await httpRequest({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/detail`,
        data: params
    })
    if (!detail) {
        return null
    }
    const {content} = detail
    return <div className='pl-80 relative'>
        <Nav content={content}/>
        <Title detail={detail}/>
        <Content content={content}/>
    </div>
}

export default DetailPage