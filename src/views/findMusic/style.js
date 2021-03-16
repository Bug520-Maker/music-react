/*设置推荐，排行榜，歌单样式*/
import styled from 'styled-components';
export const NavMenu=styled.div`
    background-color:pink;
   div{
      background-color:#c20c0c;
      display:flex;
      padding:0 0 0 395px;
      .nav-router{
        padding:6px 20px;
        div{
          font-size:12px;
          color:#ffffff;
          padding:1px 12px;
          border-radius:12px;
        }
        &.active{
          div{
            background-color:#9b0909;
          }
        }
      }
   }
`
