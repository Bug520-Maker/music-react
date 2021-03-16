import styled from 'styled-components';
export const DjRadioCateWrapper=styled.div`
  .header{
    display: flex;
    width: 900px;
    margin: 40px auto 10px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #c20c0c;
    .title{
      font-size: 24px;
      color: #333;
    }
    .more{
      font-size: 12px;
      color: #999999;
    }
  }
  padding: 0 30px;
    ul{
        display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li{
        width: 425px;
        display: flex;
        border-bottom: 1px solid #e7e7e7;
        padding: 15px 0;
        .img-container{
          img{
            width: 120px;
            outline: 1px solid rgba(0,0,0,.4);
          }
        }
        .right-msg{
          margin: 0 0 0 20px;
          .name{
            color: #333;
            font-size: 18px;
            font-weight: bold;
            margin:20px 0;
          }
          .text{
            color: #999;
            font-size: 12px;
          }
        }
      }
    }
`