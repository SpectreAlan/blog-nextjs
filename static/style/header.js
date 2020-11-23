import styled from 'styled-components'
import { rotate } from './detail'

export const HeaderBox = styled.div`
  position: fixed;
  z-index: 999;
  width:100%;
  top: 0;
  left:0;
  height: 3rem;
  line-height: 3rem;
  background: rgba(255,255,255,0.6);
  box-shadow: 0 5px 6px -5px rgba(133,133,133,0.6);
  transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
  opacity: ${(props) => props.isUp ? 0 : 1};
  transform: translate3d(0, ${(props) => props.isUp ? '-3rem' : '0'}, 0);
  .logo{
    padding-left:10px;
    box-sizing: border-box;
    .ant-avatar{
      animation: ${rotate} 2s linear infinite;
    }
  }
  .nav{
    .ant-menu{
      background: transparent;
      display: flex;
      justify-content: flex-end;
    }
    .ant-menu-horizontal{
      border: none;
    }
  }
  .nav-icon{
    text-align: right;
    padding-right:10px;
    box-sizing: border-box;
    font-size: 20px;
    span{
      margin-left:10px;
    }
  }
`
