import styled, { keyframes } from 'styled-components'
import { rotate } from './detail'
const animation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.3);
  }
`;
export const Container = styled.div`
  padding-top: 1rem;
`
export const Item = styled.div`
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  overflow: hidden;
  box-shadow: 0 4px 8px 6px rgba(7,17,27,0.06);
  text-align: center;
  &:hover{
    box-shadow: 0 4px 12px 12px rgba(7,17,27,0.15);
  }
  .profile{
  .ant-avatar{
    animation: ${rotate} 2s linear infinite;
  }
    >p{
      margin: 20px 0;
    }
    .ant-col{
      cursor: pointer;
    }
    .social{
      display: flex;
      justify-content: space-around;
      font-size: 20px;
      margin: 20px 0 10px;
    }
    .collect{
      margin: 20px 0;
      cursor: pointer;
      position: relative;
      z-index: 1;
      background-color: #49b1f5;
      color: #fff;
      text-transform: uppercase;
      line-height: 1.6rem;
      span{
        margin-right: 10px;
      }
    }
  }
  .card{
    text-align: left;
    .item{
      max-height: 80px;
      margin-bottom: 10px;
      border-bottom: 1px dashed rgba(7,17,27,0.06);
      position: relative;
      .ant-col{
        overflow: hidden;
        cursor: pointer;
        h3:hover{
          color: #40a9ff;
        }
      }
      &:hover img{
        transform: translateY(-50%) scale(1.2);
      }
      img{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%) scale(1);
      }
    }
    .category{
      margin-bottom: 8px;
      cursor: pointer;
      transition: all 0.3s;
      color: rgba(0, 0, 0, 0.85);
      &:hover{
        transform: scale(1.02);
        background: #40a9ff;
        color: #fff;
      }
    }
    .tags{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      span{
        padding: 4px;
        cursor: pointer;
        &:hover{
          color: red;
        }
      }
      .bold{
        font-weight: bold;
        font-size: 20px;
        color: #99a9bf;
      }
    }
    .SoundOutlined{
      color: red;
      animation: ${animation} 0.3s linear infinite
    }
    h2{
      font-size: 14px;
      span{
        margin-right: 6px;
        font-size: 16px;
      }
    }
    img{
      width: 100%;
      transition: all 0.3s;
      cursor: pointer;
    }
  }
`
