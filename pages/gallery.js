import React, { useState } from 'react'
import { Container } from '../static/style/timeLine'
import { Main } from '../static/style/gallery'
import MyHead from '../components/Head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetch } from '../api';
import ImagePreview from '../components/ImagePreview';
import { BackTop } from 'antd';
const info = {
  article_title: 'AlanGrady的个人相册',
  article_des: 'AlanGrady的个人博客，一个有内涵的web前端，专注vue/react/nodejs/flutter,批量压缩，打包下载，压缩质量设置',
  keywords: 'AlanGrady,web前端,nginx,linux,nodejs,vue,react,flutter,react-hooks'
}
const Gallery = (props) => {
  const [modal, setModal] = useState({})
  const [show, setShow] = useState(false)
  const { list, image } = props
  const o = {}
  list.map((i) => o[i.title] ? o[i.title].push(i) : (o[i.title] = [], o[i.title].push(i)))
  const gallery = Array.from(Object.keys(o))
  const openModal = (data) => {
    setShow(true)
    setModal(data)
  }
  const closeModal = () => {
    setShow(false)
    setModal({})
  }
  return (
    <>
      <MyHead info={info}/>
      <Header/>
      <Container image={image}>
        <div className="top">
          <p>那些年我到过的地方</p>
        </div>
        <Main>
          {
            gallery.map((k, i) => (
              <div key={i}>
                <h3>{k}</h3>
                <div className="list">
                  {
                    o[k].map((item, j) => (
                      <div className="item" key={j + i}><img src={item.url} alt="item.des" onClick={() => openModal(item)}/></div>
                    ))
                  }</div>
              </div>
            ))
          }
        </Main>
      </Container>
      {show && <ImagePreview modal={modal} closeModal={closeModal}/>}
      <Footer/>
      <BackTop/>
    </>
  )
}
Gallery.getInitialProps = async () => await fetch('gallery')
export default Gallery
