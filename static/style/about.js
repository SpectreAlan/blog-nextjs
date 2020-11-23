import styled from 'styled-components'
export const Main = styled.div`
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
  }
  .ant-descriptions{
    margin-bottom: 20px;
    border-bottom: 1px dashed #3d5064;;
    .ant-descriptions-title{
      font-size: 20px;
      font-weight: bold;
    }
    .ant-descriptions-item-label{
       color: #3d5064;
       font-weight: bold;
    }
    .anticon{
      font-size: 20px;
      margin-right: 12px;
    }
  }
`
