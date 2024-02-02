'use client'
import React from 'react'
import MarkdownNavbar from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css';
const Nav:React.FC<{content: string}> = ({content})=>{
    return <div className="w-80 fixed h-full top-0 left-0 pt-10 fuck-shadow hidden lg:block">
        <h3 className='text-center'>文章目录</h3>
        <MarkdownNavbar
            className="article-menu"
            source={content}
            headingTopOffset={50}
        />
    </div>
}

export default Nav