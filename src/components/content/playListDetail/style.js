import styled from "styled-components";
export const PlayListWrapper=styled.div`
  width: 980px;
  height: 1500px;
  margin: 0 auto;
  display: flex;
`
export const LeftContent=styled.div`
  width: 709px;
  height: 100%;
  padding: 50px 30px 0 35px;
  border-right: 1px solid #d3d3d3;
  border-left: 1px solid #d3d3d3;
  .header{
    display: flex;
    .cover{
      margin: 0 25px 0 0;
    }
    .msg{
      .title{
        font-size: 20px;
        color: #333;
        img{
          width: 50px;
        }
      }
      .user-msg{
        display: flex;
        font-size: 12px;
        align-items: center;
        .user-name{
          color:#0c73c2;
          margin: 0 0 0 10px;
        }
        .create-time{
          margin: 0 0 0 15px;
        }
      }
    }
  }
`
export const RightContent=styled.div`
  width: 270px;
  height: 100%;
  border-right: 1px solid #d3d3d3;
`