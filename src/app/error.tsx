'use client'
import React from 'react'
import {Button, Result} from "antd";

interface IProps {
    reset: () => void
}

const Error: React.FC<IProps> = ({reset}) => {
    return <div className="p-8"><Result
        status={403}
        title='Opps ！'
        subTitle='Something went wrong!'
        extra={<Button type='primary' onClick={reset}>Try again</Button>}
    />
    </div>
}

export default Error