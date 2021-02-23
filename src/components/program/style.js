import styled from 'styled-components';
export const ProgramWrapper=styled.div`
   display: flex;
  align-items: center;
  .img-container{
    margin: 0 10px 0 0;
  }
  .program-msg{
    font-size: 12px;
    div{
      cursor:pointer
    }
    div:nth-child(1)
    {
      width:260px;
      :hover {
        text-decoration: underline;
      }
    }
    div:nth-child(2)
    {
      width:260px;
      color: #999999;
      :hover{
        text-decoration: underline;
      }
    }
  }
  .tag{
    font-size: 13px;
    border: 1px solid #999;
    padding: 2px 10px;
    color: #999999;
  }
`