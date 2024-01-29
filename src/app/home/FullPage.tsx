import React, {useState, useEffect, useRef} from 'react'
import {DoubleLeftOutlined} from '@ant-design/icons'

const FullPage:React.FC = ()=>{
    const [count, setCount] = useState(0)
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
    return <div bg={fullPage}>
        <div className="txt">
            {poem.slice(0, count)}
            <span className={count % 2 === 0 ? 'show' : 'hide'} ref={InterRef}> |</span>
        </div>
        <a href="#article-list" ><DoubleLeftOutlined/></a>
    </div>
}

export default FullPage
