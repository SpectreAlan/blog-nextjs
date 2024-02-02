import {Button, Form, Input, message} from 'antd';
import {MailOutlined, MessageOutlined, UserOutlined} from '@ant-design/icons';
import React, {useState} from 'react';
import httpRequest from "@/utils/fetch";

interface IProps {
    info: Comment.Info
    handelFinished: ()=>void
}
const CommentForm: React.FC<IProps> = ({info, handelFinished}) => {
    const [loading, setLoading] = useState(false)

    const placeholder = info?.nickName ? '@' + info?.nickName : 'Talk is cheap,show me the code!'
    const onFinish = async (values: { [key: string]: string } ) => {
        setLoading(true)
        httpRequest({
            url: '/blog/comment',
            method: 'POST',
            data: {
                ...values,
                ...info
            }
        }).then(()=>{
            setLoading(false)
            handelFinished()
        }).catch(()=>{
            setLoading(false)
        })
    };
    return (<Form onFinish={onFinish}>
        <Form.Item
            label={<span><UserOutlined/>&nbsp;昵称&nbsp;</span>} name="nickName"
            rules={[{required: true, message: '请输入您的昵称!',}]}
        >
            <Input placeholder="请输入您的昵称..."/>
        </Form.Item>
        <Form.Item
            label={<span><MailOutlined/>&nbsp;邮箱&nbsp;</span>} name="email"
            rules={[{type: 'email', message: '邮箱格式有误！',}, {
                required: true,
                message: '必填!但不会公开，站长回复以后会收到邮件通知',
            }]}
        >
            <Input placeholder="请输入您的邮箱,站长回复以后会收到邮件通知"/>
        </Form.Item>
        <Form.Item
            label={<span><MessageOutlined/>&nbsp;评论&nbsp;</span>} name="content"
            rules={[{required: true, message: '请输入您的评论!',}]}
        >
            <Input.TextArea placeholder={placeholder}/>
        </Form.Item>
        <Form.Item className='text-center'>
            <Button type="primary" htmlType="submit" loading={loading}>提交评论</Button>
        </Form.Item>
    </Form>)
}
export default CommentForm
