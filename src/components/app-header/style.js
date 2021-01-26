import styled from 'styled-components';
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
`
/*导航条右部样式*/
export const ContentRight=styled.div`
   display:flex;
   padding:0 5px;
   margin:0 0 0 60px;
   .search-outer{
      padding:8px 5px 8px 0 ;
      background:#fff;
      margin:18px 0 0 0;
      border-radius:18px;
      height:20px;
   }
   .search-input{
     font-size:12px;
     margin:0 0 0 50px;
     width:120px;
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
