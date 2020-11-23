import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  z-index: 66666;
  @media screen and (max-width: 1024px) {
    padding: 20px;
  }
  .in{
    position: absolute;
    top: 50%;
    left: 50%;
    max-height: 100%;
    transform: translate(-50%,-50%);
    @media screen and (max-width: 1024px) {
      max-width: 100%;
    }
  }
  >.anticon-close{
    z-index: 66667;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
  }
  .title{
    position: absolute;
    top: 30px;
    left: 20px;
    background: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    max-width: 300px;
    z-index: 66667;
    >.anticon-close{
      position: absolute;
      right: 5px;
      top: 5px;
    }
    h3{
      color: #13c2c2;
    }
  }
  .anticon-message{
    font-size: 2rem;
    color: #fff;
    position: absolute;
    top: 20px;
    left: 20px;
     @media screen and (max-width: 1024px) {
      font-size: 20px;
      top: 10px;
      left: 10px;
    }
  }
  .anticon-close{
    transition: transform 0.5s;
    &:hover{
      transform: rotate(360deg);
    }
    @media screen and (max-width: 1024px) {
      font-size: 20px;
      top: 10px;
      right: 10px;
    }
  }
`
