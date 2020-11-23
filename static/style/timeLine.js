import styled from 'styled-components'

export const Container = styled.div`
  overflow: hidden;
  .top{
    height: 20rem;
    position: relative;
    width: 100%;
    background-color: #000;
    background-attachment: local;
    background-position: center;
    background-image: url(${(props) => props.image});
    p{
      text-align: center;
      position: absolute;
      top: 10rem;
      left: 0;
      width: 100%;
      color: #eee;
      text-shadow: 0.1rem 0.1rem 0.2rem rgba(0,0,0,0.15);
      line-height: 1.5;
      font-size: 2rem;
      font-weight: bold;
      @media screen and (max-width: 1024px) {
        font-size: 20px;
        padding: 10px;
      }
    }
  }
`
export const Main = styled.div`
.ant-timeline{
    margin: 20px auto;
    padding: 3rem;
    width: 1100px;
    border-radius: 8px;
    background: rgba(255,255,255,.7);
    box-shadow: 0 4px 8px 6px rgba(7,17,27,0.06);
    @media screen and (max-width: 1024px) {
      width: 95%;
      padding: 10px;
      margin: 20px auto;
      img{
        width: 40px;
        margin: 0 10px;
      }
    }
    img{
      width: 100px;
      margin: 0 20px;
      @media screen and (max-width: 1024px) {
        display: block;
      }
    }
  }
`
