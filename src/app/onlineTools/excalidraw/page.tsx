import React from 'react'
import {Metadata} from "next";
import Draw from "@/app/onlineTools/excalidraw/Excalidraw";

export const metadata: Metadata = {
    title: '在线虚拟手绘风格白板',
    description: '一款开源的、在线的虚拟手绘风格白板。 协作和端到端加密',
    keywords: '白板、手绘风格、在线、思维导图、脑图'
};

const Excalidraw = () => {
    return <div>
        <div
            className="h-56 bg-cover bg-center bg-fixed relative mb-4"
            style={{backgroundImage: `url(/image-proxy/blog/cover/${new Date().getDate()}.jpg)`}}
        >
            <div className='bg-black bg-opacity-50 absolute w-full h-full'/>
            <p className='w-full absolute top-1/2 text-center transform -translate-y-1/2 lg:text-4xl text-xl font-bold text-white'>虚拟手绘风格白板</p>
        </div>
        <div className='p-4'>
            <div className='md:w-[1100px] mx-auto lg:p-8 p-4 fuck-shadow rounded h-[600px]'>
                <Draw/>
            </div>
        </div>
    </div>
}

export default Excalidraw