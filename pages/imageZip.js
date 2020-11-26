import React, { useEffect, useState } from 'react'

import { Upload, Button, Slider, Row, Col, message, Tooltip, Steps } from 'antd'
import {
  UploadOutlined,
  SyncOutlined,
  FileZipOutlined,
  QuestionCircleOutlined,
  ReadOutlined,
  RobotOutlined
} from '@ant-design/icons'
import JSZip from 'jszip'
import FileSaver from 'file-saver'
import { base64ToBlob, photoCompress } from '../utils'
import MyHead from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from '../static/style/timeLine'
import { Main } from '../static/style/gallery'
import { UploadContriner } from '../static/style/imageZip'
import ImagePreview from '../components/ImagePreview'
const info = {
  article_title: '在线批量无损压缩图片',
  article_des: '一款小巧的在线批量无损压缩图片工具,批量压缩，打包下载，压缩质量设置',
  keywords: '在线压缩，图片压缩，无损压缩，批量下载'
}
const { Step } = Steps
const ImageZip = () => {
  const [image, setImage] = useState('')
  const [step, setStep] = useState(0)
  const [count, setCount] = useState(0)
  const [origin, setOrigin] = useState(new Date().getTime())
  const [modal, setModal] = useState({})
  const [show, setShow] = useState(false)
  const [list, setList] = useState([])
  const [quality, setQuality] = useState(7)
  const [state, setState] = useState(false)

  const marks = {
    1: { style: { color: '#f50', }, label: <strong>1</strong> },
    10: { style: { color: '#f50', }, label: <strong>10</strong> }
  }
  const uploadConfig = {
    fileList: list,
    multiple: true,
    listType: 'picture',
    className: 'upload-list-inline',
    beforeUpload: (file) => {
      if (!file.type || !file.type.includes('image')) {
        message.error('年轻人不讲武德 ' + file.name + ' 不是一张图片呀铁汁')
        return
      }
      setList((list) => {
        const files = [...list, file]
        if (files.length > 0) {
          setStep(1)
        }
        if (files.length > 50) {
          if ((new Date().getTime() - origin) > 4000) {
            setOrigin(new Date().getTime())
            message.error('超出50张限制，请分批压缩')
          }
          return list
        }
        return files
      })
    },
    onRemove: (file) => {
      const files = list.filter((v) => v.name !== file.name)
      setList(files)
    },
    onPreview: (file) => {
      photoCompress(file, {}, (base64) => {
        setShow(true)
        setModal({ url: base64 })
      })
    },
  };
  const getImgArrayBuffer = (img) => new Promise((resolve, reject) => {
    photoCompress(img, { quality: quality * 0.1, type: img.type }, (data) => {
      setCount((count) => ++count)
      resolve(base64ToBlob(data))
    })
  })
  const zipImg = () => {
    if (state) {
      message.info('别急呀大佬，上一波操作还没结束呢')
      return
    }
    setCount(0)
    setStep(2)
    if (list.length === 0) {
      message.error('你还没有选择图片呀大佬')
      return
    }
    setState(true)
    const zip = new JSZip();
    const promises = []
    list.map((item) => {
      const promise = getImgArrayBuffer(item).then((data) => {
        zip.file(item.name, data, { binary: true })
      })
      promises.push(promise)
    })
    Promise.all(promises).then(() => {
      zip.generateAsync({ type: 'blob' }).then((content) => {
        FileSaver.saveAs(content, 'jrsee.com.zip');
        message.success('压缩完毕，保存压缩包即可')
        setState(false)
        setList([])
        setStep(0)
      });
    })
      .catch(() => {
        message.error('文件压缩失败,刷新重试')
      });
  }
  const closeModal = () => {
    setShow(false)
    setModal({})
  }
  useEffect(() => {
    setImage(`https://raw.githubusercontent.com/SpectreAlan/images/master/${parseInt(Math.random() * 31 + 1)}.jpg`)
  }, [])
  return (<>
    <MyHead info={info}/>
    <Header/>
    <Container image={image}>
      <div className="top">
        <p>在线批量无损压缩图片</p>
      </div>
      <Main>
        <UploadContriner>
          <div className="info">
            <h3><ReadOutlined/> 工具说明：</h3>
            <p>
              该工具是一款小巧的在线批量无损压缩图片工具，图片不会上传，纯浏览器压缩，压缩方式并非单纯的裁剪尺寸，通过压缩比控制图片的输出质量，压缩比值越小压缩力度越大，对应图片质量越低，建议使用默认值压缩，单次可以压缩50张
            </p>
            <h3><RobotOutlined/>使用步骤：</h3>
          </div>
          <Steps type="navigation" size="small" current={step} className="site-navigation-steps">
            <Step title="第一步" status="finish" subTitle="设置图片压缩比" description="建议默认"/>
            <Step title="第二步" status="process" subTitle="选择图片" description="可以多选、多次选择"/>
            <Step title="第三步" status="wait" subTitle="开始压缩" description="压缩完以后自动下载"/>
          </Steps>
          <Row className='zip-box'>
            <Col lg={8} md={24} sm={24} xs={24}>
              <Tooltip title="值越小压缩力度越大，对应图片质量越低，建议默认值">
                压缩比 <QuestionCircleOutlined/> (默认7)
              </Tooltip>
              <Slider marks={marks} min={1} max={10} defaultValue={quality} tooltipVisible
                onChange={(val) => setQuality(Number(val))}/>
            </Col>
            <Col lg={8} md={24} sm={24} xs={24} className='align-center'>
              <Upload {...uploadConfig}>
                <Button className='btn'> <UploadOutlined/> 选择图片 {list.length} / 50 </Button>
              </Upload>
            </Col>
            <Col lg={8} md={24} sm={24} xs={24} className='align-center'>
              <Button onClick={() => zipImg()} className='btn'>
                {state ? <><SyncOutlined spin/>{count} / {list.length}</> : <FileZipOutlined/>}
                开始压缩
              </Button>
            </Col>
          </Row>
        </UploadContriner>
      </Main>
    </Container>
    {show && <ImagePreview modal={modal} closeModal={closeModal}/>}
    <Footer/>
  </>)
}

export default ImageZip
