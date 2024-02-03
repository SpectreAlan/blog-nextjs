import React from "react";
import Image from 'next/image'
import httpRequest from "@/utils/fetch";
import { Divider} from 'antd'
import Statistics from "@/app/layout/Statistics";

const Footer: React.FC = async () => {
    const response: { visitor: number, total: number, today: number } | null = await httpRequest({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/visitor`,
    })
    return <div className="p-2 mb-2 text-center">
        <Divider/>
        <ul className='lg:flex justify-center leading-5 text-sm list-none'>
            <li>©2018 - {new Date().getFullYear()} by <a className='text-blue-600' href="https://github.com/SpectreAlan">SpectreAlan </a></li>
            <li className='mx-2'>访客(总数/今日): {response?.total ?? 0} / {response?.today ?? 0}</li>
            <li> 总访问量: {response?.visitor ?? 0}</li>
        </ul>
        <Image src="/image-proxy/blog/common/copyright.gif" alt="copyright" width={60} height={60}/>
        <Statistics/>
    </div>
}

export default Footer