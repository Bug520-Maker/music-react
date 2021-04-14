import styled from 'styled-components';
import listStyle from '../../assets/img/list-style.png'
export const ArtistCateWrapper=styled.div`
  .artist-list{
    li{
      background-image:url(${listStyle});
      background-position: 0 -30px;
      width: 133px;
      height: 29px;
      color: #333;
      line-height: 29px;
      font-size: 12px;
      padding-left: 27px;
      &:hover{
        text-decoration: underline;
        cursor: pointer;
      }
      &.active{
        background-position:0 0 ;
      }
    }
  }
  h2{
    font-size: 16px;
    padding: 0 0 0 14px;
    height: 25px;
    font-weight: bold;
  }
`