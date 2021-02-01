import styled from 'styled-components';

import download from '@/assets/img/download.png';
export const CenterBanner=styled.div`
  width:984px;
  height:285px;
  margin: 0 auto;
  background: #42b983;
  display: flex;
`
export const LeftBanner=styled.div`
  width:730px;
  background: #f98eaf; 
  height: 100%;
  img{
    width:730px;
    height: 285px;
  }
`
export const RightBanner=styled.div`
  height: 100%;
  width:254px;
  background-image: url(${download});
`
