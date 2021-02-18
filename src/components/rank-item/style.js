import styled from 'styled-components';
export const RankItemWrapper=styled.div`
   width: 100%;
  display:flex;
  padding:10px 0 10px 20px;
  cursor:pointer;
   :hover{
     background-color: #f4f2f2;
   }
  .img-container{
    margin: 0 10px 0 0;
  }
  .rank-name,.update-time{
    font-size: 12px;
    color: #000;
  }
  .update-time{
    color: #999999;
  }
`