import styled from 'styled-components';
import playbar from '../../assets/img/playbar.png';
import statbar from '../../assets/img/statbar.png';
import control from '../../assets/img/control.png';
export const PlayWrapper=styled.div`
   height:53px;
  background-image:url(${playbar}) ;
  position:fixed;
  width: 100%;
  top: 100%;
  transform: translateY(-100%);
  opacity: 0.95;
`
export const Content=styled.div`
  width: 980px;
  height: 45px;
  /*background-color: #0086b3;*/
  margin: 7px auto 0;
  display: flex;
`
export const ControlBtn=styled.div.attrs({

})`
  width: 137px;
 /* background-color: #42b983;*/
  height: 100%;
  display: flex;
  .prev,.next{
    width: 28px;
    height: 28px;
    text-indent: -9999px;
   /* background-color: #fff;*/
    margin: 8px 8px 0 0;
  }
  .play {
    /* background-color: #0086b3;*/
    width: 36px;
    height: 36px;
    text-indent: -9999px;
    margin: 4px 8px 0 0;
    background-position: ${props=>{return props.isPlay ? '-0px -165px':'0 -204px'}};
    background-image: url(${playbar});
    :hover{
      background-position:${props=>{return props.isPlay ? '-40px -165px':'-40px -204px'}} ;
    }
  }
  .prev{
    background-image: url(${playbar});
    background-position: 0 -130px;
  }
  .next{
    background-image: url(${playbar});
    background-position: 73px -130px;
  }
`
export const Progress=styled.div`
  height: 100%;
  width: 640px;
  display: flex;
  .img-container{
    width: 35px;
    height:35px;
    position: relative;
    margin: 5px 0 0 0;
  }
  .cover{
    width: 35px;
    height: 35px;
    position: absolute;
    top: 0;
    background-image: url(${playbar});
    text-indent: -9999px;
    background-position: 0 -80px;
  }
  .flag-word{
    width: 510px;
    .song-name{
      font-size: 12px;
      color: #e8e8e8;
      margin: 0 0 0 10px;
    }
    .song-msg{
      display: flex;
      height: 25px;
      align-items: center;
    }
    .mv{
      text-indent: -9999px;
      background-image: url(${playbar});
      background-position: 0 -57px;
      display: inline-block;
      width: 19px;
      height:17px;
      margin: 0px 0 0 5px;
    }
    .artist-name
    {
      font-size: 12px;
      color: #9b9b9b;
      margin: 0 0 0 20px;
    }
    .ant-slider{
      margin-top: 0px;
      margin-left: 15px;
    }
    .ant-slider-rail{/*设置滑块外部容器*/
      height: 9px;
      background-image: url(${statbar});
      background-position:right -30px;
      border-radius: 18px;
    }
    .ant-slider-step{/*设置滑块整体样式*/
      height: 9px;
      
    }
    .ant-slider-track{/*滑块左部样式*/
      background-image: url(${statbar});
      height: 9px;
      background-position: left -66px;
    }
    .ant-slider-handle{/*滑动小点*/
      background-image: url(${control});
      background-position: 0px -250px;
      width:22px;
      height: 22px;
      border: none;
      margin: -8px 0 0 0px;
      background-color: transparent;
    }
  }
  .time{
    display: flex;
    font-size:12px ;
    color: #A1A1A1;
    margin: 24px 0 0 6px;
  }
`
export const RightControl=styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  & >div{
    display: flex;
  }
  .collect{
    background-image: url(${playbar});
    background-position: -88px -163px;
    width: 25px;
    height: 25px;
  }
   .share{
     background-position: -114px -163px;
     background-image: url(${playbar});
     width: 25px;
     height: 25px;
     margin: 0 0 0 10px;
   }
  .vol{
    background-position: -2px -248px;
    background-image: url(${playbar});
    width: 25px;
    height: 25px;
  }
  .loop{
    background-position: -3px -344px;
    background-image: url(${playbar});
    width: 25px;
    height: 25px;
    margin: 0 5px;
  }
  .list{
    background-position: -42px -68px;
    background-image: url(${playbar});
    width: 59px;
    height: 25px;
  }
`