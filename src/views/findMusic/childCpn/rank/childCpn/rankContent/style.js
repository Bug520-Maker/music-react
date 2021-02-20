import styled from 'styled-components';
import coverall from '../../../../../../assets/img/coverall.png';
import button2 from '../../../../../../assets/img/button2.png'
export const RankHead=styled.div`
  margin: 40px 0px 0px 30px;
  display: flex;
  .img-container{
    width: 150px;
    margin: 0 30px 0 0;
    position: relative;
    .cover{
      position: absolute;
      width: 100%;
      height: 150px;
      background-image:url(${coverall});
      background-position: -230px -380px;
      z-index:1;
    }
  }
  .right-msg{
    .toplist-name{
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      font-size:20px;
      color: #333333;
      margin: 15px 0 5px 0;
    }
    .update-time{
      font-size: 12px;
      color: #666666;
      margin: 0 0 25px 0;
    }
    .control-btn{
      display: flex;
      >div{
        line-height: 31px;
        font-size: 12px;
        color: #333;
        cursor: pointer;
      }
      div{
        height: 31px;
      }
      .play{
        display: flex;
      }
      .btn-end{
        background-position: right -1020px;
        background-image: url(${button2});
        padding: 0 5px 0 0;
        margin: 0 8px 0 0px;
      }
      .play div:nth-child(1){
        width: 66px;
        height: 31px;
        padding: 0 5px 0 0 ;
        background-image: url(${button2});
        background-position:0 -387px;
        vertical-align: text-top;
        color: #fff;
        i{
          width: 20px;
          height: 18px;
          display: inline-block;
          margin: 6px 5px 2px 8px;
          background-position: 0 -1622px;
          background-image: url(${button2});
        }
        span{
          margin: -13px 0 0 0;
          display: inline-block;
          vertical-align: text-top;
        }
      }
      .play div:nth-child(2){
        width: 31px;
        height: 31px;
        background-image: url(${button2});
        background-position: 0 -1588px;
        margin: 0 6px 0 0;
      }
      .subscribe{
        padding: 0 2px 0 28px;
        background-image: url(${button2});
        background-position: 0 -977px;
      }
      .share{
        padding: 0 2px 0 28px;
        background-image: url(${button2});
        background-position: 0 -1225px;
      }
      .download{
        padding: 0 2px 0 28px;
        background-image: url(${button2});
        background-position: 0 -2761px;
      }
      .comment{
        padding: 0 2px 0 28px;
        background-image: url(${button2});
        background-position: 0 -1508px;
      }
    }
  }
`
export const RankBody=styled.div`
  display: flex;
  width: 670px;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 0 30px;
  >div:nth-child(1){
    display: flex;
    align-items: center;
    div:nth-child(1)
    {
      font-size: 20px;
      color: #333;
      margin: 0 30px 0 0;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    }
    div:nth-child(2)
    {
      font-size: 12px;
      color: #666666;
    }
  }
  >div:nth-child(2)
  {
    span:nth-child(1)
    {
      color: #333;
      font-size: 12px;
    }
    span:nth-child(2)
    {
      color: #c20c0c;
      font-size: 12px;
      font-weight: bold;
    }
  }
`