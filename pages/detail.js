import React, { useEffect, useState } from 'react'
import MyHead from '../components/Head'
import Header from '../components/Header';
import Comment from '../components/detail/Comment';
import { fetch } from '../api'
import marked from 'marked'
import hljs from 'highlight.js';
import Top from '../components/detail/Top'
import { DetailContent, Aside, Container } from '../static/style/detail'
import MarkNav from 'markdown-navbar'
import config from '../config/markdown.conf'
import { CopyCode } from '../utils'
import { BackTop } from 'antd';
import Footer from '../components/Footer'
import Recommend from '../components/detail/Recommend'
import { SmileOutlined } from '@ant-design/icons';
import ImagePreview from '../components/ImagePreview';

hljs.configure(config.hljs)
marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value,
  ...config.options
})

const Detail = (props) => {
  const [modal, setModal] = useState({})
  const [show, setShow] = useState(false)
  const { id, keywords, tic, article_title, article_des, content, create_time, update_time, category_name, readed, cover, recommend, comments } = props
  // eslint-disable-next-line no-undef
  const detail = Buffer.from(content).toString()
  const previewImgEvent = () => {
    const detail = document.getElementById('detail-content')
    const images = detail.getElementsByTagName('img')
    for (let i = 0; i < images.length; i++) {
      const img = images[i]
      img.style.cursor = 'pointer'
      img.addEventListener('click', previewImg, false)
    }
  }
  const closeModal = () => {
    setShow(false)
    setModal({})
  }
  const previewImg = (e) => {
    setShow(true)
    setModal({ url: e.target.getAttribute('src') })
  }
  useEffect(() => {
    CopyCode()
    previewImgEvent()
  }, [])
  return (<>
    <MyHead info={{ keywords, article_title, article_des }}/>
    <Header/>
    <Aside id='sidebar'>
      <h3>文章目录</h3>
      {
        tic
          ? <MarkNav
            className="article-menu"
            source={detail}
            headingTopOffset={50}
          />
          : <SmileOutlined />
      }
    </Aside>
    <DetailContent id='DetailContent'>
      <Top info={{ create_time, update_time, article_title, category_name, readed, cover, count: detail.length / 1000 }}/>
      <Container>
        <div id="detail-content" dangerouslySetInnerHTML={{ __html: marked(detail) }}/>
        {recommend.length > 1 && <Recommend recommend={recommend} id={id}/>}
        <Comment comments={comments} article={article_title} id={id}/>
      </Container>
      <Footer/>
    </DetailContent>
    {show && <ImagePreview modal={modal} closeModal={closeModal}/>}
    <BackTop/>
  </>)
}
Detail.getInitialProps = async (props) => {
  const detail = await fetch('detail', { id: props.query.id })
  if (!detail) {
    props.res.redirect('/')
  }
  return detail
}

export default Detail
