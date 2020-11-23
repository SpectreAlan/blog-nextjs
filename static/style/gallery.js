import styled from 'styled-components';

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
  h3{
    margin: 1rem 0 0.7rem;
    color: #344c67;
    font-weight: bold;
  }
  .list{
    margin-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    .item{
      margin: 10px;
      img{
        height: 200px;
        &:hover{
          cursor: pointer;
        }
      }
    }
  }
`

