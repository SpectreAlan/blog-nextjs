import React, {useState, useEffect, useRef} from 'react'
import {DoubleLeftOutlined} from '@ant-design/icons'
import useFetch from "@/hooks/useFetch";

const FullPage:React.FC = ()=>{
    const [count, setCount] = useState(0)
    const {data} = useFetch({
        url: '/blog/poem',
        method: 'GET'
    })
    
    const InterRef = useRef()
    const changeCount = () => {
        const i = count < poem.length ? count + 1 : 0
        setCount(i)
    };
    useEffect(() => {
        InterRef?.current = changeCount
    })
    useEffect(() => {
        const f = () => {
            InterRef.current()
        }
        const timer = setInterval(f, 300)
        return () => {
            clearInterval(timer)
        }
    }, [])
    return <div className={`bg-cover bg-center bg-fixed h-screen flex items-center relative" style="background-image: url(/image-proxy/blog/cover/${new Date().getDate()}.jpg);`}>
        <div className="txt">
            {poem.slice(0, count)}
            <span className={count % 2 === 0 ? 'show' : 'hide'}> |</span>
        </div>
        <a href="#article-list" ><DoubleLeftOutlined/></a>
    </div>
}

export default FullPage
