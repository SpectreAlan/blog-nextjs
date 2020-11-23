import React, { useState, useEffect, useRef } from 'react'
import { Content } from '../../static/style/fullPage'
import { DoubleLeftOutlined } from '@ant-design/icons'

const FullPage = (props) => {
  const { fullPage, poem } = props
  const [count, setCount] = useState(0)
  const InterRef = useRef()
  const changeCount = () => {
    const i = count < poem.length ? count + 1 : 0
    setCount(i)
  };
  useEffect(() => {
    InterRef.current = changeCount
  })
  useEffect(() => {
    const f = () => {
      InterRef.current()
    }
    const timer = setInterval(f, 300)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <Content bg={fullPage}>
      <div className="txt">
        {poem.slice(0, count)}
        <span className={count % 2 === 0 ? 'show' : 'hide'} ref={InterRef}> |</span>
      </div>
      <a href="#article-list" ><DoubleLeftOutlined/></a>
    </Content>
  )
}

export default FullPage
