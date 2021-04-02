import React from 'react'
import { Avatar, Row, Col, Tooltip } from 'antd';
import { GithubOutlined, MailOutlined, TwitterOutlined, BookOutlined, FieldTimeOutlined, FolderOpenOutlined, TagOutlined, SoundOutlined } from '@ant-design/icons';
import { Container, Item } from '../../static/style/aside';
import Link from 'next/link';
import { AddFavorite } from '../../utils'
import Notice from './notice'
const Aside = (props) => {
  const { tags, category, recent, fetchArticle, total, notice } = props
  return (
    <Container>
      <Item>
        <div className="profile">
          <Avatar src='image-base-url/blog/common/logo.png' size='large' shape="circle"/>
          <h2>AlanGrady</h2>
          <p>如果第一次失败了，那这是1.0版本，请继续努力</p>
          <Row>
            <Col span={8}>文章 <a href="#article-list"><p>{total}</p></a> </Col>
            <Col span={8}>标签 <a href="#tags"><p>{tags.length}</p></a> </Col>
            <Col span={8}>分类 <a href="#category"><p>{category.length}</p></a> </Col>
          </Row>
          <div className="collect" onClick={() => AddFavorite()}><BookOutlined />加入书签</div>
          <div className="social">
            <Tooltip title='SpectreAlan'><a href="https://github.com/SpectreAlan" target="_blank"><GithubOutlined/></a></Tooltip>
            <Tooltip title='comjszoo@gmail.com@gmail.com'><a href="mailto:comjszoo@gmail.com" target="_blank"><MailOutlined/></a></Tooltip>
            <Tooltip title='SpectreAlan'><a href="https://twitter.com/SpectreAlan" target="_blank"><TwitterOutlined/></a></Tooltip>
          </div>
        </div>
      </Item>
      <Item>
        <div className="card">
          <h2><SoundOutlined className='SoundOutlined'/>公告</h2>
          <Notice notice={notice}/>
        </div>
      </Item>
      <Item>
        <div className="card">
          <h2><FieldTimeOutlined />最新文章</h2>
          {
            recent.map((item, index) => (
              <Link href={{ pathname: '/detail', query: { id: item.id } }} key={index}>
                <Row className='item' gutter={8}>
                  <Col span={8}>
                    <img src={item.cover} alt=""/>
                  </Col>
                  <Col span={14}>
                    <h4>{item.article_title}</h4>
                    <i>{item.update_time}</i>
                  </Col>
                </Row>
              </Link>
            ))
          }
        </div>
      </Item>
      <Item>
        <div className="card" id="category">
          <h2><FolderOpenOutlined />分类</h2>
          {
            category.map((item, index) => (
              <Row className='category' key={index} gutter={8} onClick={() => fetchArticle({ type: 'category', val: item.title })}>
                <Col span={20}>
                  {item.title}
                </Col>
                <Col span={4}>
                  {item.count}
                </Col>
              </Row>
            ))
          }
        </div>
      </Item>
      <Item>
        <div className="card" id="tags">
          <h2><TagOutlined />标签</h2>
          <div className="tags">
            {
              tags.map((item, index) => (
                <span
                  key={index}
                  style={{
                    color: `rgb(${Math.floor(Math.random() * 201)}, ${Math.floor(Math.random() * 201)}, ${Math.floor(Math.random() * 201)} )`,
                    fontSize: Math.floor(Math.random() * 15 + 15) + 'px'
                  }}
                  onClick={() => fetchArticle({ type: 'tags', val: item.tag_name })}
                >{item.tag_name}
                </span>
              ))
            }
          </div>
        </div>
      </Item>
    </Container>
  );
}
export default Aside
