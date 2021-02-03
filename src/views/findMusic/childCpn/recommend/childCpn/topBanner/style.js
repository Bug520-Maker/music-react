import styled from 'styled-components';

import download from '@/assets/img/download.png';
export const Bgc=styled.div`
  background-image:url(${props=>props.bgcImg});
  background-repeat: no-repeat;
  background-size: 6000px;
  background-position: center center;
`
export const CenterBanner=styled.div`
  width:984px;
  height:285px;
  margin: 0 auto;
  background: red;
  display: flex;
  position: relative;
`
export const LeftBanner=styled.div`
  width:730px;
  background: #f98eaf; 
  height: 100%;
  img{
    width:730px;
    height: 285px;
  }
  .rightIcon,.leftIcon
  {
    width:37.6px;
    height:64px;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    text-align: center;
    line-height: 64px;
  }
  .rightIcon:hover,.leftIcon:hover
  {
    background-color:rgba(0,0,0,.3);
    cursor: pointer;
  }
  .rightIcon i,.leftIcon i
  {
    font-size:28px ;
    color:#e3e3e8;
  }
  .rightIcon
  {
    left:103%;
    i{
      display: inline-block;
      transform: rotateZ(90deg);
    }
  }
  .leftIcon
  {
    left: -7%;
    i{
      display: inline-block;
      transform: rotateZ(-90deg);
    }
  }
`
export const RightBanner=styled.div`
  height: 100%;
  width:254px;
  background-image: url(${download});
`
