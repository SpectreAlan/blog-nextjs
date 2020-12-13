import React, { useState } from 'react'
import { Row, Col, Avatar, Button } from 'antd';
import { CommentOutlined, GlobalOutlined, LaptopOutlined } from '@ant-design/icons';
import { Container } from '../../static/style/comment'
import CommentForm from './CommentForm'
const Comment = (props) => {
  const [replayInfo, setReplayInfo] = useState({ id: -1, nick_name: '', parent_id: -1 })
  const { id, comments, article } = props
  const replay = (k) => {
    const o = {
      parent_id: k.parent_id === -1 ? k.id : k.parent_id,
      id: k.id,
      nick_name: k.nick_name
    }
    setReplayInfo(replayInfo.parent_id === -1 ? o : { id: -1, nick_name: '', parent_id: -1 })
  }
  const o = {}
  let level0 = []
  const level1 = []
  for (let i = 0; i < comments.length; i++) {
    if (comments[i].parent_id === -1) {
      level0.push(comments[i])
      o[comments[i].id] = []
    } else {
      level1.push(comments[i])
    }
  }
  for (let i = 0; i < level1.length; i++) {
    o[level1[i].parent_id].push(level1[i])
  }
  level0.sort((a, b) => a.time - b.time)

  for (let i = 0; i < comments.length; i++) {
    const arr = o[level0[i].id]
    if (arr && arr.length > 0) {
      const l = level0.slice(0, i + 1)
      const r = level0.slice(i + 1, level0.length)
      arr.sort((a, b) => a.time - b.time)
      level0 = l.concat(arr, r)
      i += arr.length
    }
  }
  return (
    <Container>
      <h2><CommentOutlined />评论</h2>
      {replayInfo.id === -1 ? <CommentForm id={id} article_name={article} replayInfo={replayInfo} replay={replay}/> : ''}
      <h3>{comments.length} 评论</h3>
      {
        comments.length === 0
          ? (<div className="none">来发评论吧~</div>)
          : (<div className="list">
            {
              level0.map((k, i) => (<div key={i} className={k.parent_id === -1 ? 'level0' : 'level1'}>
                <Row>
                  <Col xs={4} sm={4} md={2} lg={2} xl={2}>
                    <Avatar src={k.author ? 'image-base-url/blog/common/logo.png' : 'image-base-url/blog/common/avatar1.png'}/>
                  </Col>
                  <Col xs={16} sm={16} md={20} lg={20} xl={20}>
                    {k.author ? <i className='author'>作者</i> : (
                      <div className='flex'>
                        <b className={k.parent_name ? 'parent_name' : 'name'}> {k.nick_name + (k.parent_name ? ' @' + k.parent_name : (k.parent_id === -1 ? '' : '@作者'))} </b>
                        <i className='browser'> <GlobalOutlined />{k.browser_name} </i>
                        <i className='os'> <LaptopOutlined />{k.system_name} </i>
                      </div>
                    )}
                    <p>{k.create_time}</p>
                    <span className='comment'>{k.comment}</span>
                  </Col>
                  <Col xs={4} sm={4} md={2} lg={2} xl={2}>
                    <Button type="primary" onClick={() => {replay(k)}}>{replayInfo.id !== -1 && replayInfo.id === k.id ? '取消' : '回复'}</Button>
                  </Col>
                </Row>
                {replayInfo.id === k.id ? <CommentForm replayInfo={replayInfo} id={id} article_name={article} replay={replay}/> : ''}
              </div>))
            }
          </div>)
      }

    </Container>
  )
}

export default Comment
