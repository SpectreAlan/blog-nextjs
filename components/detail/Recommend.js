import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
import { LikeFilled } from '@ant-design/icons';
import { Container } from '../../static/style/recomend';
import Router from 'next/router'

const Recommend = (props) => {
  let { recommend, id } = props
  recommend = recommend.filter((item) => item.id !== id)
  const go = (id) => {
    Router.push('/detail?id=' + id, `/detail/${id}`)
  }
  const b = () => {
    Router.back()
  }
  return (
    <Container>
      <h2 onClick={() => b()}><LikeFilled /> 相关推荐</h2>
      <div className="list">
        {
          recommend.map((k, i) => (
            <Card
              key={i}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={k.cover} />}
              onClick={() => {go(k.id)}}
            >
              <Meta title={k.article_title} description={k.create_time} />
            </Card>
          ))
        }
      </div>
    </Container>)
}
export default Recommend
