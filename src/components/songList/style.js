import styled from 'styled-components';
import table from '../../assets/img/table.png';
import songList from '../../assets/img/songList.png';
import iconallOther from '../../assets/img/iconallOther.png';
export const SongListWrapper=styled.div`
  margin: 0 0 0 30px;
   width: 670px;
  border: 1px solid #d9d9d9;
  border-top: none;
   .song-list-header{
     display: flex;
     border-bottom: 2px solid #d4d4d4;
     border-top: 2px solid #c20c0c;
     div{
       color: #666666;
       height: 34px;
       font-size: 12px;
       line-height: 34px;
       background-image: url(${table});
       background-repeat: repeat-x;
       padding: 0 0 0 10px;
     }
     .index{
       width: 77px;
     }
     .title{
       width: 327px;
       border-right:2px solid #d4d4d4 ;
       border-left:2px solid #d4d4d4 ;
     }
     .duration{
       width: 90px;
       border-right:2px solid #d4d4d4 ;
     }
     .artist{
       width:174px;
     }
   }
  .song-lists{
    li{
      display: flex;
      padding: 10px 0;
      align-items:center;
      :nth-child(odd)
      {
        background-color: #f7f7f7;
      }
      :hover .duration .control-btn{
        display: block;
      }
      :hover .duration div:nth-child(1)
      {
        display: none;
      }
      .index{
        width: 78px;
        text-align: center;
        color: #999;
      }
      .song-title{
        width: 327px;
        display: flex;
        align-items: center;
        .img-container{
           img{
             width: 50px;
           }
        }
        i{
          display: inline-block;
          width: 18px;
          height: 18px;
          background-image: url(${songList});
          background-position: 0 -103px;
          margin: 0 15px 0 20px;
          cursor: pointer;
        }
      }
      .duration{
        font-size: 13px;
        color: #666666;
        width: 91px;
        .control-btn{
          display:none;
          cursor:pointer;
          i{
            display: inline-block;
            width: 18px;
            height: 18px;
          }
          .add{
            background-image: url(${iconallOther});
            background-position: 0 -700px;
          }
          .subscribe{
            background-image: url(${songList});
            background-position: 0 -174px;
          }
          .share{
            background-image: url(${songList});
            background-position: 0 -195px;
          }
          .download{
            background-image: url(${songList});
            background-position: -81px -174px;
          }
        }
      }
      .artist{
        width: 173px;
        font-size: 13px;
      }
    }
  }
`