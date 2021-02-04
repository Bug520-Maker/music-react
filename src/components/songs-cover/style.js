import styled from 'styled-components';

import coverUrl from '../../assets/img/coverall.png';
import iconAll from '../../assets/img/iconall.png'
export const HotRec=styled.div`
  .img-container{
    position: relative;
    img{
      width:140px;
      height:140px;
    }
    .cover{
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url(${coverUrl});
      background-repeat: no-repeat;
      background-position: 0 0;
      left: 0px;
      top:0px;
    }
    .play{
      position: absolute;
      padding: 0 10px;
      height: 27px;
      width: 100%;
      top: 112px;
      background-color: rgba(0,0,0,.4);
      border-top: 1px solid #000000;
      .headset{
        display: inline-block;
        height: 27px;
        width: 20px;
        background-image: url(${iconAll});
        background-position: 0 -16px;
      }
      .play-count
      {
        color: #cccccc;
        display: inline-block;
        vertical-align: text-top;
        margin: -10px 0 0 0;
      }
      .play-cion
      {
        background-image: url(${iconAll});
        background-position: 0 7px;
        display: inline-block;
        width: 20px;
        height: 27px;
        float: right;
      }
    }
  }
  .state{
    width:140px;
    font:14px Arial,Helvetica,sans-serif;
    margin: 10px 0 0 0;
  }
`