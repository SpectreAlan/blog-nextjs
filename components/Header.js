import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import { Row, Col, Menu, Drawer, Modal, Input, List, Avatar, message } from 'antd'
import {
  HomeOutlined,
  SearchOutlined,
  CalendarOutlined,
  TagOutlined,
  PictureOutlined,
  FileTextOutlined,
  ToolOutlined,
  MenuFoldOutlined,
  FileZipOutlined
} from '@ant-design/icons'
import { HeaderBox } from '../static/style/header'
import { throttle } from '../utils'
import { fetch } from '../api';
const { Search } = Input
const { SubMenu } = Menu
const Header = () => {
  const [drawerDisplay, setDrawerDisplay] = useState(false);
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isUp, setIsUp] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [inputVal, setInputVal] = useState('');
  useEffect(() => {
    window.onscroll = throttle(() => {
      const y = document.documentElement.scrollTop
      setIsUp(y > 200 && y > scrollY)
      setScrollY(y)
    }, 300)
  })
  const clickNav = (e) => {
    if (e.key === 'NOTE') {return}
    setDrawerDisplay(false)
    e.key === 'Search' ? setSearchDisplay(true) : Router.push(e.key)
  };
  const drawerControl = () => {
    setDrawerDisplay(!drawerDisplay)
  };
  const clearSearch = () => {
    setSearchDisplay(false)
    setSearchList([])
    setInputVal('')
  };
  const onSearch = async () => {
    if (!inputVal) {
      message.info('老铁，请输入关键字');
      setSearchList([])
      return
    }
    const res = await fetch('keywordsSearch', { keywords: inputVal })
    setSearchList(res)
  };
  const goDetail = (id) => {
    setSearchDisplay(false)
    Router.push('/detail?id=' + id)
  }
  const generateMenu = () => (
    <Menu onClick={clickNav} mode={drawerDisplay ? 'vertical' : 'horizontal'}>
      <Menu.Item key="Search" icon={<SearchOutlined/>}>搜索</Menu.Item>
      <Menu.Item key="/" icon={<HomeOutlined/>}>主页</Menu.Item>
      <Menu.Item key="/timeLine" icon={<CalendarOutlined/>}>时间轴</Menu.Item>
      <Menu.Item key="NOTE" icon={<FileTextOutlined/>}><a href="http://note.jrsee.com" target="_blank">文档</a></Menu.Item>
      <Menu.Item key="/gallery" icon={<PictureOutlined/>}>相册</Menu.Item>
      <SubMenu icon={<ToolOutlined/>} title="工具">
        <Menu.Item key="/imageZip" icon={<FileZipOutlined/>}>图片无损压缩</Menu.Item>
      </SubMenu>
      <Menu.Item key="/about" icon={<TagOutlined/>}>关于</Menu.Item>
    </Menu>
  )
  return (
    <HeaderBox isUp={isUp}>
      <div id="ribbon" />
      <Row justify="space-around">
        <Col xs={16} sm={6} className='logo'>
          <Row>
            <Col xs={0} sm={4}><Avatar size="large" src='https://raw.githubusercontent.com/SpectreAlan/images/master/blog/logo.png' /></Col>
            <Col xs={24} sm={20}>
              <span>{'AlanGrady\'s blogs'}</span>
            </Col>
          </Row>
        </Col>
        <Col xs={0} sm={18} className='nav'>
          {generateMenu()}
        </Col>
        <Col xs={8} sm={0} className='nav-icon'>
          <SearchOutlined onClick={() => setSearchDisplay(true)}/>
          <MenuFoldOutlined onClick={drawerControl}/>
          <Drawer
            title="AlanGrady's blogs"
            placement="right"
            closable={false}
            onClose={drawerControl}
            visible={drawerDisplay}
          >
            {generateMenu()}
          </Drawer>
        </Col>
      </Row>
      <Modal
        title="不搜一下你怎么知道有没有呢"
        visible={searchDisplay}
        onCancel={clearSearch}
        afterClose={clearSearch}
        footer={null}
      >
        <Search placeholder="关键字模糊搜索..." onSearch={onSearch} allowClear onChange={(e) => {setInputVal(e.target.value)}} value={inputVal}/>
        <br/>
        <br/>
        <List
          size="small"
          bordered
          dataSource={searchList}
          renderItem={(item) => (
            <List.Item>
              <h3 onClick={() => {goDetail(item.id)}} className='searchItem'>{item.title}</h3>
            </List.Item>
          )}
        />
      </Modal>
    </HeaderBox>
  )
}

export default Header
