import React from 'react'
import {Space, Tag} from "antd";
import {
    ClockCircleOutlined,
    InboxOutlined,
    ProfileOutlined,
    RiseOutlined,
    ScheduleOutlined,
    TagOutlined
} from "@ant-design/icons";

const colors: string[] = ['green', 'cyan', 'blue', 'geekblue', 'purple', 'lime', 'gold']

const Title: React.FC<{ detail: Article.Detail }> = ({detail}) => {
    const {content, createdAt, updatedAt, scan, title, category, tags} = detail
    return <div
        className="h-80 bg-cover bg-center bg-fixed relative lg:mb-8 mb-4"
        style={{
            backgroundImage: `url(/image-proxy/blog/cover/${new Date().getDate()}.jpg)`
    }}
    >
        <div className='bg-black bg-opacity-50 absolute w-full h-full'/>
        <div
            className='w-full box-border absolute top-1/2 transform -translate-y-1/2 text-white lg:pl-10 pl-4 text-xs lg:text-sm'
        >
            <span className='lg:text-4xl text-xl font-bold'>{title}</span>
            <div className='mt-3'>
                <TagOutlined rev=''/> 标签：
                <Space>
                    {tags.map((tag, i) => <Tag key={tag._id} color={colors[i]}>{tag.title}</Tag>)}
                </Space>
            </div>
            <div className='mt-1'>
                <span><InboxOutlined rev=''/> 类别：{category.title}</span>
            </div>
            <div className='py-1 mt-1'>
                <span><ScheduleOutlined rev=''/> 创建时间： {createdAt}</span>
            </div>
            <div className='mt-1'>
                <Space className='flex-wrap'>
                    <span><ProfileOutlined rev=''/> 字数总计: {(content.length / 1000).toFixed(2) + ' k'}</span>
                    <span><ClockCircleOutlined
                        rev=''/> 建议阅读时长: {Math.ceil(content.length / 1000) || 1} 分钟</span>
                    <span><RiseOutlined rev=''/> 阅读量: {scan}</span>
                </Space>
            </div>
        </div>
    </div>
}
export default Title