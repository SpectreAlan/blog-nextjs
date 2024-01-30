import React, {useState, useEffect} from 'react'
import {DoubleLeftOutlined} from '@ant-design/icons'
import useFetch from "@/hooks/useFetch";

let index = 0
let count = 0
const FullPage: React.FC = () => {
    // const [count, setCount] = useState(0)
    // const {response} = useFetch<{ content: string }[]>({
    //     url: '/blog/poem',
    //     method: 'GET'
    // })

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         if (response?.length) {
    //             const i = count < response[index].content.length ? count + 1 : 0
    //             if (i === 0) {
    //                 index = Math.floor(Math.random() * (response.length))
    //             }
    //             setCount(i)
    //         }
    //
    //     }, 300)
    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [])
    return <div
        className={`bg-cover bg-center bg-fixed h-screen flex items-center relative" style="background-image: url(/image-proxy/blog/cover/${new Date().getDate()}.jpg);`}>
        <div className="txt">
            {/*{response?.[index]?.content.slice(0, count)}*/}
            <span className={count % 2 === 0 ? 'show' : 'hide'}> |</span>
        </div>
        <a href="#article-list"><DoubleLeftOutlined rev=''/></a>
    </div>
}

export default FullPage
