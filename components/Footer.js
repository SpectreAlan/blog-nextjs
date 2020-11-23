import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetch } from '../api';
import Router from 'next/router';
import Loading from '../components/loading';

const Container = styled.div`
  margin: 20px auto;
  width: 100%;
  text-align: center;
  border-top: 1px solid #00c4b6;
  padding-top:30px;
`
const Footer = () => {
  const [info, setInfo] = useState({ visitors: 0, total: 0, today: 0 })
  const [loading, setLoading] = useState(false)
  const startLoading = () => {
    setLoading(true)
  }
  const stopLoading = () => {
    setLoading(false)
  }
  useEffect(() => {
    Router.events.on('routeChangeStart', startLoading)
    Router.events.on('routeChangeComplete', stopLoading)
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'https://pv.sohu.com/cityjson?ie=utf-8');
    document.getElementsByTagName('body')[0].appendChild(script);
    script.onload = script.onreadystatechange = function () {
      if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
        fetch('statistics', { city: returnCitySN.cname || '' }).then((res) => setInfo(res))
      }
      script.onload = script.onreadystatechange = null;
    }
    return () => {
      Router.events.off('routeChangeStart', stopLoading)
      Router.events.off('routeChangeComplete', stopLoading)
    }
  }, [])
  return (
    <>
      <Container>
        <Loading loading={loading}/>
        <p>©2018 - 2020 by <a href="https://jrsee.com">AlanGrady </a>
          <span> 访客(总数/今日): {info.visitors} / {info.today}, 总访问量: {info.total}</span>
        </p>
        <img src="https://raw.githubusercontent.com/SpectreAlan/images/master/blog/copyright.gif" alt="copyright"/>
      </Container>
    </>
  )
}

export default Footer
