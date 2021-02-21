import styled from 'styled-components';
import button from '../../../../assets/img/button2.png'
export const PlayListWrapper=styled.div`
   width:980px;
   height:1744px;
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  padding: 40px;
  .all{
    padding: 0 0 5px 0;
    border-bottom: 2px solid #c20c0c;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div:nth-child(1)
    {
      display: flex;
      align-items: center;
      color:#333;
      font-size: 24px;
      >div:nth-child(1)/*全部*/
      {
        margin: 0 10px 0 0;
      }
    }
    div:nth-child(2).cate/*按钮*/
    {
      display: flex;
      div:nth-child(1)
      {
        width: 91px;
        height: 31px;
        background-image: url(${button});
        background-position: 0 -59px;
        font-size: 12px;
        color: #0c73c2;
        text-align: center;
        display: inline-block;
        line-height: 31px;
      }
      div:nth-child(2)
      {
        width: 5px;
        background-image: url(${button});
        background-position:right -100px;
      }
    }
  }
  .hot{
    width:46px;
    height: 29px;
    line-height: 29px;
    background-color: #c50b0d;
    color: #fff;
    text-align: center;
    line-height: 29px;
    font-size: 12px;
    border-radius: 3px;
  }
  .play-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 30px 0 0 0;
  }
  .play-list li{
    margin: 0 20px 25px 0;
  }
`