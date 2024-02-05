import React from 'react'
import Introduction from "@/app/onlineTools/imageZip/Introduction";
import {Metadata} from "next";
import Zip from "@/app/onlineTools/imageZip/Zip";

export const metadata: Metadata = {
    title: '在线批量无损压缩图片',
    description: '一款小巧的在线批量无损压缩图片工具,批量压缩，打包下载，压缩质量设置',
    keywords: '在线压缩，图片压缩，无损压缩，批量下载'
};

const ImageZipPage = () => {
    return <div>
        <div
            className="h-56 bg-cover bg-center bg-fixed relative mb-4"
            style={{backgroundImage: `url(/image-proxy/blog/cover/${new Date().getDate()}.jpg)`}}
        >
            <p className='w-full absolute top-1/2 text-center transform -translate-y-1/2 lg:text-4xl text-xl font-bold text-white'>在线批量无损压缩图片</p>
        </div>
        <div className='p-4'>
            <div className='md:w-[1100px] mx-auto p-8 fuck-shadow rounded'>
                <Introduction/>
                <Zip/>
            </div>
        </div>
    </div>
}

export default ImageZipPage