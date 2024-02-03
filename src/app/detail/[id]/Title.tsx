import React from 'react'
import {Space} from "antd";
import {
    ClockCircleOutlined,
    InboxOutlined,
    ProfileOutlined,
    RiseOutlined,
    ScheduleOutlined,
    SyncOutlined
} from "@ant-design/icons";

const Title:React.FC<{detail: Article.Detail}> = ({detail})=>{
    const {content, createdAt, updatedAt, scan, title, category} = detail
    return <div
        className="h-80 bg-cover bg-center bg-fixed relative mb-8"
        style={{backgroundImage: `url(/image-proxy/blog/cover/${new Date().getDate()}.jpg)`}}
    >
        <div className='w-full box-border absolute top-1/2 transform -translate-y-1/2 text-white pl-10'>
            <span className='lg:text-4xl text-xl font-bold'>{title}</span>
            <div className='py-1 text-xs lg:text-sm'>
                <Space className='flex-wrap'>
                    <span><ScheduleOutlined rev=''/> 发表于： {createdAt}</span>
                    <span><SyncOutlined spin  rev=''/> 更新于： {updatedAt}</span>
                    <span><InboxOutlined rev=''/> 类别：{category.title}</span>
                </Space>
            </div>
            <div className='text-xs lg:text-sm'>
                <Space className='flex-wrap'>
                    <span><ProfileOutlined rev=''/> 字数总计:  {(content.length / 1000).toFixed(2) + ' k'}</span>
                    <span><ClockCircleOutlined  rev=''/> 建议阅读时长: {Math.ceil(content.length / 1000) || 1} 分钟</span>
                    <span><RiseOutlined rev=''/> 阅读量: {scan}</span>
                </Space>
            </div>
        </div>
    </div>
}
export default Title