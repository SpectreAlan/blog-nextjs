import styled from 'styled-components'

export const UploadContriner = styled.div`
.zip-box{
  margin-top:2rem;
  padding:2rem 0.5rem;
  border: 1px dashed lightslategrey;
  border-radius: 8px;
  .btn{
    background: #46a6ff;
    color: #fff;
    width: 14rem;
    height:4rem;
    font-size: 1.1em;
    border-radius: 8px;
    .anticon{
      font-size: 1.5rem;
    }
  }
  .upload-list-inline{
    .ant-upload-list-item-name{
      cursor: pointer;
    }
  }
}
`
