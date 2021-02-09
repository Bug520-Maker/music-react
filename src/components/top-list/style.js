import styled from 'styled-components';
import controlBtn from '../../assets/img/index.png';
import coverImg from '../../assets/img/coverall.png';
import addBtn from '../../assets/img/iconallOther.png'
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
  ul{
    font-size: 12px;
    margin: 20px 0 0 0;
    li{
      width:210px;
      height: 32px;
      display: flex;
      span{
        font-size: 16px;
        display: inline-block;
        width: 35px;
        text-align: center;
      }
      :nth-of-type(-n+3) span
      {
        color: #cb0d0c;
      }
      .song-name{
        width: 73px;
        height: 32px;
        line-height:32px;
        flex: 1;
      }
      :hover .control-btn{
        display: block;
      }
      .control-btn{
        width: 100px;
        height: 50px;
        /*background-color: #0086b3;*/
        display: none;
        i{
          display: inline-block;
          width: 17px;
          height: 17px;
          margin: 7px 8px 0 0;
          cursor: pointer;
        }
        .play,.subscribe{
          background-image: url(${controlBtn});
        }
        .play{
          background-position: -267px -268px;
          margin:0 8px 0 20px ;
        }
        .add{
          background-image:url(${addBtn});
          background-position: 2px -698px;
        }
        .subscribe{
          background-position: -297px -268px;
        }
      }
    }
  }
`