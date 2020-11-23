import styled from 'styled-components';

export const Container = styled.div`
  margin: 3rem 0;
  padding: 20px;
  border-top: 1px solid #49b1f5;
  @media screen and (max-width: 1024px) {
    padding: 8px;
  }
  .list{
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
    overflow: hidden;
    .ant-card{
      margin: 15px;
      .ant-card-cover{
        height: 150px;
        img{
          height: 150px;
        }
      }
    }
  }
  .ant-card{
    box-shadow: 0 4px 8px 6px rgba(7,17,27,0.06);
    .ant-card-cover{
      margin:0;
      img{
        height: auto;
      }
    }
  }
`
