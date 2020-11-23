import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 1rem;
  .item{
    border-radius: 8px;
    margin-bottom: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 8px 6px rgba(7,17,27,0.06);
    &:hover{
      box-shadow: 0 4px 12px 12px rgba(7,17,27,0.15);
    }
    .left{
      overflow: hidden;
      position: relative;
      img{
        width: 100%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%) scale(1);
        transition: all 0.2s;
        &:hover{
          transform: translateY(-50%) scale(1.2);
        }
      }
    }
    .right{
      padding: 1rem;
      h2{
        text-align: center;
        font-size: 2em;
        &:hover{
          color:#43b1f2;
          cursor: pointer;
        }
      }
      p{
        text-align: center;
        span:hover{
          color:#43b1f2;
          cursor: pointer;
        }
      }
      div{
        text-align: left;
        height: 130px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
`
