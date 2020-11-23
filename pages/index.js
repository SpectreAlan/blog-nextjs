import React, { useState } from 'react'
import MyHead from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FullPage from '../components/home/FullPage'
import { Row, Col, Pagination, BackTop } from 'antd';
import { Content } from '../static/style/home'
import ArticleList from '../components/home/ArticleList'
import Aside from '../components/home/Aside'
import Loading from '../components/loading'
import { fetch } from '../api';

const Home = (props) => {
  const [article, setArticle] = useState(props.article)
  const [loading, setLoading] = useState(false)
  const [listQuery, setListQuery] = useState({ page: 1, category: '', tags: '' })
  const { tags, category, recent, fullPage, poem, notice } = props.info
  const fetchArticle = async (param) => {
    const url = window.location.href
    window.location.href = url + (url.includes('#article-list') ? '' : '#article-list')
    const o = { ...listQuery }
    o.page = 1
    switch (param.type) {
    case 'category':
      o.category = param.val
      o.tags = ''
      break
    case 'tags':
      o.tags = param.val
      o.category = ''
      break
    default:
      o.page = param
    }
    setListQuery(o)
    setLoading(true)
    const req = await fetch('article', o)
    setLoading(false)
    setArticle(req)
  }
  const { list, total } = article
  return (
    <>
      <Loading loading={loading}/>
      <MyHead/>
      <Header/>
      <FullPage fullPage={fullPage} poem={poem}/>
      <Content id='article-list'>
        <Row className='container'>
          <Col lg={17} md={17} sm={24} xs={24}>
            <ArticleList list={list}/>
            <Pagination defaultCurrent={1} total={total} pageSize={10} className='pagination' showTotal={(total) => `Total ${total} items`}
              onChange={fetchArticle}/>
          </Col>
          <Col lg={6} md={6} sm={0} xs={0} offset={1}>
            <Aside
              tags={tags}
              category={category}
              recent={recent}
              fetchArticle={fetchArticle}
              total={total}
              notice={notice}
            />
          </Col>
        </Row>
      </Content>
      <Footer/>
      <BackTop/>
    </>
  )
}

Home.getInitialProps = async () => {
  const article = await fetch('article', { page: 1 })
  const info = await fetch('info')
  return { article, info }
}

export default Home
