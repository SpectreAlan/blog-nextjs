import React, { useEffect, useRef, useState } from 'react'

const Notice = (props) => {
  const { notice } = props
  const canvas = useRef(null)
  const [x, setX] = useState(252)
  useEffect(() => {
    const ctx = canvas.current.getContext('2d')
    const timer = setInterval(() => {
      ctx.clearRect(0, 0, 252, 40)
      ctx.fillStyle = 'black'
      ctx.font = '14px 微软雅黑'
      setX((x) => x - 2)
      ctx.fillText(notice, x, 25)
      if (x < -(14 * notice.length)) {
        setX(200)
      }
    }, 30)
    return () => {
      clearInterval(timer)
    }
  }, [x])
  return (
    <canvas ref={canvas} width="252" height="40"/>
  );
}
export default Notice
