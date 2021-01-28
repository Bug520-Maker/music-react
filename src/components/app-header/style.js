import styled from 'styled-components';
import searchLogo from '../../assets/img/topbar.png'
import navIndex from '../../assets/img/topbar.png'
/*头部导航条整体样式*/
export const HeaderWrapper=styled.div`
   background-color:#242424;
   height:70px;
  `
/*头部导航条居中内容*/
export const HeaderContent=styled.div`
  display:flex;
  justify-content:space-betweent;
  height:100%;
  a{
    color:#cccccc;
    font-size:14px;
    padding:0 19px;
    display:inline-block;
    height:100%;
    line-height:70px;
    position:relative;
  };
  a:hover
  {
    color:#fff;

  }
  a.logo{
    padding:0px;
    background:${props=>{
      return `url(${props.backgroundUrl})`
  }};
    height:69px;
    width:177px;
  }
  .active i.nav-index
  {
    display:inline-block;
    width:13px;
    height:13px;
    position:absolute;
    left:50%;
    transform:translate(-50%,-100%);
    top:100%;
    background-image:url(${navIndex});
    background-position:-226px 6px;
  }
  .active{
    color:#fff;

  }
`
/*导航条右部样式*/
export const ContentRight=styled.div`
   display:flex;
   padding:0 5px;
   margin:0 0 0 60px;

   .search-outer{
      padding:6px 5px 6px 0 ;
      background:#fff;
      margin:18px 0 0 0;
      border-radius:18px;
      height:20px;
      position:relative;
      i.search-icon
      {
        display:inline-block;
        width:40px;
        height:30px;
        background-image:url(${searchLogo});
        background-position:0 -99px;
        position:absolute;
        top:6%;

      }
   }
   .search-input{
     font-size:12px;
     margin:0 0 0 30px;
     width:110px;
   }
   /*创作者中心*/
   button.creator{
      height:34px;
      color:#cccccc;
      font-size:12px;
      margin:18px 0 0 10px;
      padding:0px 20px;
      border-radius:18px;
      border:1px solid #4f4f4f;
      background:transparent;
   }
   div.login{
     font-size:12px;
     color:#787878;
     margin:29px 0 0 20px;
   }
`
