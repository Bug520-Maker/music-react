import styled from 'styled-components';
import arrow from '../../../../../../assets/img/index.png';
export const NewAlbums=styled.div`
  width: 687px;
  height:186px;
  margin: 20px 0 30px 0;
  border: 1px solid #d3d3d3;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  .albums-outer{
    display: flex!important;
    justify-content: space-between;
  }
  .left-icon
  {
    background-image: url(${arrow});
    display: inline-block;
    width: 25px;
    height: 30px;
    cursor: pointer;
    background-position: -260px -75px;
  }
  .right-icon
  {
    background-image: url(${arrow});
    display: inline-block;
    width:25px;
    height: 30px;
    cursor: pointer;
    background-position: -300px -75px;
  }
`
export const Swiper=styled.div`
  width: 645px;
`