'use client'
import React, {useState, useEffect} from 'react'
import {DoubleLeftOutlined} from '@ant-design/icons'
import httpRequest from "@/utils/fetch";

interface IPoem {
    content: string
}

const FullPage: React.FC = () => {
    const [poem, setPoem] = useState<IPoem[]>([{content: '茶若醉人何须酒,唯有碎银解千愁'}])
    const [count, setCount] = useState(0)
    const [index, setIndex] = useState(0)

    const query = async () => {
        const res: { list: IPoem[] } | null = await httpRequest({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/poem`,
        })
        setPoem(res?.list ?? [])
    }

    useEffect(() => {
        query()
    }, [])
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prevCount => {
                const i = prevCount < poem[index].content.length ? prevCount + 1 : 0;
                if (i === 0) {
                    setIndex(Math.floor(Math.random() * (poem.length)))
                }
                return i;
            });
        }, 300)
        return () => {
            clearInterval(timer)
        }
    }, [poem])
    return <div
        className={`bg-cover bg-center bg-fixed h-[100vh] relative`}
        style={{backgroundImage: `url(/image-proxy/blog/cover/${new Date().getDate()}.jpg)`}}>
        <div className='bg-black bg-opacity-50 absolute w-full h-full'/>
        <div
            className="absolute w-full top-1/2 text-center transform-translate-y-1/2 font-bold text-white text-2xl lg:text-4xl">
            {poem?.[index]?.content.slice(0, count)}
            <span
                className={`text-gray-200 ml-2 ${count % 2 === 0 ? 'show' : 'hide'}`}
            >
                |
            </span>
        </div>
        <a href="#article-list"
           className='transform rotate-[-90deg] left-1/2 transform -translate-x-1/2 text-3xl bottom-0 absolute  cursor-pointer'
           style={{animation: 'animation 1s linear infinite'}}>
            <DoubleLeftOutlined rev=''/>
        </a>
    </div>
}


export default FullPage
