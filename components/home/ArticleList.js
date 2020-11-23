import React from 'react'
import { Row, Col } from 'antd';
import { InboxOutlined, ScheduleOutlined } from '@ant-design/icons';
import { Container } from '../../static/style/article';
import Link from 'next/link'
const ArticleList = (props) => {
  const list = props.list
  return list.map((item, index) => (
    <Container key={index}>
      <Row className='item'>
        <Col lg={8} md={8} sm={0} xs={0} className='left'>
          <img src={item.cover} alt={item.title}/>
        </Col>
        <Col lg={16} md={16} sm={24} xs={24} className='right'>
          <Link href={'/detail?id=' + item.id} as={`/detail/${item.id}`} >
            <h2>{item.title}</h2>
          </Link>
          <p>
            <ScheduleOutlined/> {item.createTime} | <InboxOutlined/> <span>{item.category}</span>
          </p>
          <div>
            {item.description}
          </div>
        </Col>
      </Row>
    </Container>
  ))
};
export default ArticleList
