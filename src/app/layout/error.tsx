'use client'
import React, {useEffect, useState} from "react";
import {Button, Result} from "antd";
import {useRouter} from 'next/navigation'

const config = {
    '404': {
        title: '迷路啦',
        subTitle: 'Sorry, the page you visited does not exist.'
    },
    '500': {
        title: '出错啦',
        subTitle: 'Sorry, something went wrong.'
    }
}

const Error: React.FC<{status: '404' | '500'}> = ({status}) => {
    const router = useRouter()
    const [seconds, setSeconds] = useState(5)
    const [loading, setLoading] = useState(false)

    const backHome = () => {
        if(loading){
            return
        }
        setLoading(true)
        router.push('/')
    }
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(seconds => {
                const now = seconds - 1
                if (!now) {
                    clearInterval(timer)
                    backHome()
                }
                return now
            })
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    return <div className="p-8">
        <Result
            status={status}
            title={config[status].title}
            subTitle={config[status].subTitle}
            extra={<div>
                <span className='mx-4'><span className='text-red-500'>{seconds}</span>秒后跳转首页</span>
                <Button type='primary' onClick={backHome} loading={loading}>{loading? 'Redirecting...' : 'Back Home'}</Button>
            </div>}
        />
    </div>
}

export default Error
