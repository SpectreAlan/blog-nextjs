import styled, { keyframes } from 'styled-components'
const msg = keyframes`
  0%{
      transform: scale(0.01);
  }
  80%{
      transform: scale(1);
  }
  100%{
      transform: scale(0.01);
  }
`;
export const rotate = keyframes`
  0%{
      transform: rotate(0);
  }
  100%{
      transform: rotate(360deg);
  }
`;
export const TopBox = styled.div`
  position: relative;
  margin-bottom: 1rem;
  height: 19rem;
  background-color: #49b1f5;
  background-attachment: local;
  background-position: center;
  background-size: cover;
  background-image: url("${(props) => props.cover}");
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;
  &:before{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    content: '';
  }
  .out{
    top: 8rem;
    left: 8%;
    position: absolute;
    .flex{
      display: flex;
      flex-wrap: wrap;
      i{
        padding-right: 16px;
        font-style: normal;
        span{
          margin-right: 4px;
          font-size: 16px;
        }
      }
    }
    h3{
      font-size: 1.5rem;
      color: #fff;
      line-height: 1.5;
    }
  }
`
export const DetailContent = styled.div`
  padding-left: 310px;
  position: relative;
  @media screen and (max-width: 1024px) {
    padding-left: 0;
  }
`
export const Container = styled.div`
  margin: 40px auto;
  padding: 50px 50px 0;
  max-width: 1000px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 8px 6px rgba(7,17,27,0.06);
  @media screen and (max-width: 1024px) {
    padding: 20px;
    margin: 20px 10px;
  }
  &:hover{
    box-shadow: 0 4px 12px 12px rgba(7,17,27,0.15);
  }
  pre{
    display: block;
    background: #263238!important;
    padding: .5rem !important;
    overflow-y: auto;
    font-weight: 300;
    font-family: Menlo, monospace;
    border-radius: .3rem;
    margin: 1rem 0;
    position: relative;
    >code{
      border:0 !important;
      color:#FFF;
    }
    .copy-code{
      position: absolute;
      right: 10px;
      top: 10px;
      width: 16px;
      height: 16px;
      background: url("https://raw.githubusercontent.com/SpectreAlan/images/master/blog/copy.png");
      background-size: cover;
      border:none;
      outline: none;
      cursor:pointer;
      .msgBox{
        background: #fff;
        color: #263238;
        padding: 8px 20px;
        border-radius: 6px;
        text-align: center;
        animation: ${msg} 1s;
        position: absolute;
        top: -10px;
        right: 16px;
      }
    }
  }
  code {
    display: inline-block ;
    border:1px solid #fdb9cc;
    border-radius:3px;
    font-size: 12px;
    padding-left: 5px;
    padding-right: 5px;
    color:#4f4f4f;
    margin: 0 3px;
  }
  img{
    max-width: 100%;
  }
  table{
    border-color: grey;
    overflow: auto;
    margin: 0 0 1rem;
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    thead {
      background: rgba(153,169,191,0.1);
    }
    th,td {
      padding: 0.3rem 0.6rem;
      border: 1px solid #d6d6d6;
      vertical-align: top;
      text-align: center;
    }
  }
  blockquote{
    padding: 1rem;
    border-left: 0.2rem solid #49b1f5;
    background-color: #e9f5fe;
    color: #6a737d;
    display: block;
  }
  h1,h2,h3,h4,h5,h6{
    margin: 0.5rem 0;
    cursor: pointer;
    transition: all 0.2s ease-out;
    color: #344c67;
    font-weight: bold;
  }
  h1:hover,
  h2:hover,
  h3:hover,
  h4:hover,
  h5:hover,
  h6:hover{
      padding-left: 1.1rem;
  }
`
export const Aside = styled.div`
  @media screen and (max-width: 1024px) {
    display: none;
  }
  width: 300px;
  padding: 1rem 0 2rem 0.5rem;
  opacity: 0.9;
  position: fixed;
  z-index: 666;
  top: 3rem;
  left: 0.5rem;
  background: #f6f8fa;
  height: 100%;
  box-shadow: -0.25rem 0 0.25rem rgba(232,237,250,0.6) inset;
  h3{
    text-align: center;
    font-size: 18px;
  }
  .anticon{
    font-size: 30px;
    color: #1890ff;
    margin-left: 47%;
    animation: ${rotate} 2s linear infinite;
  }
  .markdown-navigation {
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Helvetica", "Arial", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
    width: 100%;
    overflow-y: auto;
    height: 100%;
    .title-anchor {
      display: block;
      color: #bbb;
      transition: all 0.2s;
      margin: 0.8em 0;
      font-weight: lighter;
      line-height: 2em;
      padding-right: 1.8em;
      cursor: pointer;
      small {
          margin: 0 0.8em;
      }
      &:hover{
        color: #1890ff;
      }
      &.active {
        color: #fff;
        background-color: #49b1f5;
      }
    }
    .title-level1 {
      color: #000;
      font-size: 1.2em;
      padding-left: 1em;
      font-weight: normal;
    }
    .title-level2 {
      color: #99a9bf;
      font-size: 1em;
      padding-left: 1em;
      font-weight: normal;
    }
    .title-level3 {
      color: #333;
      font-size: 0.8em;
      padding-left: 3em;
      font-weight: normal;
    }
    .title-level4 {
      color: #666;
      font-size: 0.72em;
      padding-left: 5em;
    }
    .title-level5 {
      color: #aaa;
      font-size: 0.72em;
      padding-left: 7em;
    }
    .title-level6 {
      color: #bbb;
      font-size: 0.72em;
      padding-left: 9em;
    }
}
`
