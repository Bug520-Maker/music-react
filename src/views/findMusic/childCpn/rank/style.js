import styled from 'styled-components';
export const RankWrapper=styled.div`
  width:980px;
  height: 7282px;
  margin: 0 auto;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  display: flex;
  .feature-rank{
    margin: 30px 0 10px 20px;
    font-size: 14px;
    font-family: SimSun,宋体;
    font-weight: bolder;
  }
`
export const LeftContent=styled.div`
  width: 240px;
  border-right: 1px solid #d3d3d3;
  .rank-list li.active{
    background-color: #e6e6e6;
  }
  .media-rank{
    font-size: 14px;
    font-family: SimSun,宋体;
    font-weight: bolder;
    padding: 20px 0 5px 20px;
  }
  .rank-list li.active .media-rank{
    background-color: #fff;
  }
`
export const RightContent=styled.div`
  flex: 1;
`