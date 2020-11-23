import { Button, Form, Input, message } from 'antd';
import { MailOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { fetch } from '../../api';

const CommentForm = (props) => {
  const { id, replayInfo, article_name, replay } = props
  const placeholder = replayInfo && (replayInfo.nick_name || replayInfo.pid !== -1) ? '@' + (replayInfo.nick_name || '作者') : 'Talk is cheap,show me the code!'
  const onFinish = async (values) => {
    values.article_id = id
    values.article_name = article_name
    values.parent_name = replayInfo.nick_name
    values.parent_id = replayInfo.parent_id
    const res = await fetch('comment', values)
    message.info(res ? '发表成功,评论将在审核通过后显示' : '发表失败，请稍后再试')
    replay({ parent_id: replayInfo.parent_id })
  };
  return (<Form onFinish={onFinish}>
    <Form.Item
      label={<span><UserOutlined/>&nbsp;昵称&nbsp;</span>} name="nick_name"
      rules={[{ required: true, message: '请输入您的昵称!', }]}
    >
      <Input placeholder="请输入您的昵称..." />
    </Form.Item>
    <Form.Item
      label={<span><MailOutlined/>&nbsp;邮箱&nbsp;</span>} name="email"
      rules={[{ type: 'email', message: '邮箱格式有误！', }, { required: true, message: '必填!但不会公开', }]}
    >
      <Input placeholder="请输入您的邮箱..." />
    </Form.Item>
    <Form.Item
      label={<span><MessageOutlined/>&nbsp;评论&nbsp;</span>} name="comment"
      rules={[{ required: true, message: '请输入您的评论!', }]}
    >
      <Input.TextArea placeholder={placeholder} />
    </Form.Item>
    <Form.Item className='submit-comment'>
      <Button type="primary" htmlType="submit">提交评论</Button>
    </Form.Item>
  </Form>)
}
export default CommentForm
