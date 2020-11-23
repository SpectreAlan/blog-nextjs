import React from 'react'
import { InboxOutlined, ScheduleOutlined, SyncOutlined, ProfileOutlined, ClockCircleOutlined, RiseOutlined } from '@ant-design/icons';
import { TopBox } from '../../static/style/detail'
const Top = (props) => {
  const { article_title, create_time, update_time, category_name, readed, cover, count } = props.info
  return (
    <>
      <TopBox cover={cover}>
        <div className='out'>
          <h3>{article_title}</h3>
          <div className="flex">
            <i><ScheduleOutlined/> 发表于： {create_time}</i>
            <i><SyncOutlined spin />更新于： {update_time}</i>
            <i><InboxOutlined/> 类别：{category_name}</i>
          </div>
          <div className="flex">
            <i><ProfileOutlined/> 字数总计:  {count.toFixed(2) + ' k'}</i>
            <i><ClockCircleOutlined />建议阅读时长: {Math.ceil(count) || 1} 分钟</i>
            <i><RiseOutlined/> 阅读量: {readed}</i>
          </div>
        </div>
      </TopBox>
    </>
  )
}

export default Top
