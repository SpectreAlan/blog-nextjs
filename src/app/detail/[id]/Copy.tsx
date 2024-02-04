'use client'
import React from "react";
import {CopyOutlined} from "@ant-design/icons";
import {message} from 'antd'

const Copy: React.FC<{ code: string }> = ({code}) => {

    const copy = () => {
        navigator.clipboard.writeText(code)
        message.success('已复制到剪切板')
    }

    return <CopyOutlined
        rev=''
        className='absolute right-2 top-2 cursor-pointer hover:scale-125 text-white z-50'
        onClick={() => copy()}
        title='点击复制'
    />
}

export default Copy