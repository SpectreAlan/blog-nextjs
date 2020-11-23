import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { SyncOutlined } from '@ant-design/icons'
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  opacity: 0.5;
  background-color: #000;
`
const antIcon = <SyncOutlined style={{ fontSize: 24 }} spin />;
const Loading = (props) => (
  <>
    {
      props.loading
        ? <Container>
          <Spin tip="加载中..." wrapperClassName='spinning-style' size="large" indicator={antIcon}/>
        </Container> : ''
    }
  </>
)

export default Loading
