import styled from 'styled-components';
export const SettleArtistWrapper=styled.div`
  padding: 20px;
  .header{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;
    padding: 0 0 8px 0;
    .settle-artist-title{
      font-size:12px;
      color: #333;
    }
    .check-all{
      font-size: 12px;
      color:#666666;
    }
  }
  .artist-list{
    margin: 20px 0 0 0;
    li{
      background-color: #fafafa;
      margin: 0 0 10px 0;
      display: flex;
      border: 1px solid #e9e9e9;
      .right-msg{
        margin: 0 0 0 10px;
        font-size: 14px;
        color: #333333;
        font-weight: bold;
      }
    }
  }
  .apply-music{
    background-color: #f7f7f7;
    border-radius: 3px;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    padding: 4px 15px;
    border: 1px solid #c4c4c4;
  }
`
