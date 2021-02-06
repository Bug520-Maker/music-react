import styled from 'styled-components';
import cover from '../../assets/img/coverall.png';
import iconAll from '../../assets/img/iconall.png';
export const AlbumCoverWrapper=styled.div`
  .album-img{
    width:${props=>props.width+'px'};
    height:${props=>props.height+'px'};
    position:relative;
    box-shadow: 0 5px 5px rgba(0,0,0,.2);
    .cover{
      width: ${props=>props.width+'px'};
      height:${props=>props.height+'px'};
      position: absolute;
      top:0;
      background-image: url(${cover});
      background-position: 0 ${props=>props.bgc+'px'};
    }
    img{
      width:${props=>props.height+'px'};
    }
    .play{
      width: 30px;
      height:30px;
      left: ${props=>props.height+'px'};
      top: 100%;
      transform: translate(-100%,-100%);
      position: absolute;
      background-image: url(${iconAll});
      background-position: 0 -80px;
      display: none;
    }
    :hover .play{
      display: block;
    }
  }
  .album-state
  {
    width:${props=>props.width+'px'} ;
    font:12px Arial,Helvetica,sans-serif;
    margin: 10px 0 5px 0;
  }
  .album-creator{
    width: ${props=>props.width+'px'} ;
    font:12px Arial,Helvetica,sans-serif;
    color:#666;
  }
`