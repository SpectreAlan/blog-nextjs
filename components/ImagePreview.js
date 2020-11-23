import React, { useEffect, useState } from 'react'
import { Container } from '../static/style/imagePreview'
import { CloseOutlined, MessageOutlined, PushpinFilled } from '@ant-design/icons';

const ImagePreview = (props) => {
  const { title, des, url } = props.modal
  const { closeModal } = props
  const [show, setShow] = useState(true)
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  return (
    <Container>
      {
        title ? (
          show
            ? <div className="title">
              <h3><PushpinFilled /><span>{title}</span></h3>
              <p>{des}</p>
              <CloseOutlined onClick={() => {setShow(false)}}/>
            </div>
            : <MessageOutlined onClick={() => {setShow(true)}} />) : ''
      }
      <CloseOutlined onClick={() => {closeModal()}}/>
      <img className="in" src={url} alt={title}/>
    </Container>
  )
}

export default ImagePreview
