import styled from 'styled-components'

export const Container = styled.div`
  border-top: 1px solid #49b1f5;
  margin-top: 3rem;
  padding: 20px;
  h2{
    span{
      margin-right: 6px;
    }
  }
  .submit-comment{
    text-align: center;
  }
  .ant-form{
    margin: 20px 0;
  }
  .list{
    >div{
      padding: 10px;
      border-radius: 8px;
      margin: 10px 0;
      &:hover{
        box-shadow: 0 18px 39px 0 rgba(7,17,27,.6)
       }
      .flex{
        display: flex;
        flex-wrap: wrap;
        i{
          margin-left:8px;
        }
        .name:hover{
          color: #d7191a;
          cursor: pointer;
        }
        .pname{
          color: #1abc9c;
          &:hover{
            color: #d7191a;
            cursor: pointer;
          }
        }
      }
      p{
          color: #b3b3b3;
      }
      .comment{
        color: #555;
      }
    }
    .level1{
      margin-left: 40px;
      @media screen and (max-width: 1024px) {
        margin-left: 20px;
      }
    }
    .author{
      padding: 2px 14px;
      background: #49b1f5;
      border-radius: 4px;
      color: white;
    }
  }
  .none{
    text-align: center;
  }
  .ant-avatar{
     width: 45px;
     height: 45px;
     @media screen and (max-width: 1024px) {
        width: 35px;
        height: 35px;
      }
  }
`
