import styled from 'styled-components';
export const DjRadioWrapper=styled.div`
  width: 980px;
  height: 3331px;
  border: 1px solid #d3d3d3;
  border-top: none;
  margin: 0 auto;
  .dj-cate{
    margin: 30px 0px 0 10px;
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        margin: 0 10px 20px 10px;
        padding:10px 15px;
        border-radius:15px;
        :hover{
          background-color: #f6f7f7;
          cursor: pointer;
        }
        .img-container{
          width: 48px;
          height: 48px;
          overflow: hidden;
        }
        .dj-name{
          font-size: 13px;
          color:#888888;
        }
      }
    }
  }
`
/*推荐节目，推荐电台*/
export const Recommend=styled.div`
    display: flex;
  justify-content: space-evenly;
`
/*推荐节目*/
export const RecProgram=styled.div`
   width: 426px;
  border: 1px solid #e2e2e2;
  .program-outer{
    padding: 7px 0 7px 20px;
    :nth-child(odd)
    {
      background-color: #f7f7f7;
    }
  }
`
/*节目榜*/
export const ProgramRank=styled(RecProgram)`
`