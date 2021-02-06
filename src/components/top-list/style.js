import styled from 'styled-components';
import controlBtn from '../../assets/img/index.png';
import coverImg from '../../assets/img/coverall.png';
export const Header=styled.div`
  display: flex;
  .img-container{
    position: relative;
    img{
      width:80px;
    }
    .cover{
      position: absolute;
      top: 0px;
      width: 80px;
      height: 80px;
      background-image: url(${coverImg});
      background-position: -145px -57px;
      background-repeat: no-repeat;
      text-indent: -9999px;
      z-index: 1;
    }
  }
  .right-content{
    margin: 10px 0 0 10px;
    .rank-name{
      font-size: 14px;
      font-weight: bold;
      margin: 0 0 10px 0;
    }
    .control-btn{
      i{
        display: inline-block;
        width: 25px;
        height: 25px;
        margin: 0 10px 0 0;
      }
      i:nth-child(1){
        background-image: url(${controlBtn});
        background-position: -267px -205px;
      }
      i:nth-child(2){
        background-image: url(${controlBtn});
        background-position: -300px -205px;
      }
    }
  }
`
export const BodyList=styled.div`
  
`