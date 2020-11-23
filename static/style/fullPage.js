import styled, { keyframes } from 'styled-components'

const animation = keyframes`
  0% {
    bottom: 3.5%;
    color: grey;
  }
  100% {
    bottom: 2%;
    color: #fff;
  }
`;

export const Content = styled.div`
  background-image: url(${(props) => props.bg});
  background-attachment: fixed;
  align-items: center;
  height: 100vh;
  display: flex;
  background-size: cover;
  width: 100%;
  position: relative;
  .txt{
    position: absolute;
    width: 100%;
    top: 50%;
    text-align: center;
    transform: translateY(-50%);
    color: #fff;
    @media screen and (min-width: 360px) {
      font-size: 1.5em;
    }
    @media screen and (min-width: 768px) {
      font-size: 2.5em;
      font-weight: bold;
    }
    .show{
      opacity: 1;
    }
    .hide{
      opacity: 0;
    }
    span{
      font-weight: normal;
      color: grey;
    }
  }
  .anticon{
    transform: rotate(-90deg);
    font-size: 30px;
    position: absolute;
    width: 100%;
    animation: ${animation} 1s linear infinite;
    cursor: pointer;
  }
`
