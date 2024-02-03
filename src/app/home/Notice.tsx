'use client'
import React, {useEffect, useRef, useState} from 'react'
import {SoundOutlined} from "@ant-design/icons";

export const Notice: React.FC<{ notice: string }> = ({notice}) => {
    const canvas = useRef(null)
    const [x, setX] = useState(252)
    useEffect(() => {
        // @ts-ignore
        const ctx = canvas?.current?.getContext('2d')
        const timer = setInterval(() => {
            ctx.clearRect(0, 0, 252, 40)
            ctx.fillStyle = 'black'
            ctx.font = '14px 微软雅黑'
            setX((x) => x - 2)
            ctx.fillText(notice, x, 25)
            if (x < -(14 * notice.length)) {
                setX(200)
            }
        }, 30)
        return () => {
            clearInterval(timer)
        }
    }, [x])
    return <div className="p-4 rounded-lg mb-4 overflow-hidden text-center fuck-shadow">
        <div className="text-left w-full flex items-center">
            <span className='mr-2'><SoundOutlined className='soundOutlined mr-2' rev=''/>公告</span>
            <canvas ref={canvas} width="200" height="40"/>
        </div>
    </div>
}

export default Notice