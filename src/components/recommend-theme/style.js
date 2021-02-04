import styled from 'styled-components';
import albumUrl from '../../assets/img/index.png'
export const RecommendTheme=styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #c10d0c;
  div:nth-child(1)
  {
    display: flex;
  }
  div.icon{
    width: 35px;
    height: 35px;
    background-position:-225px -154px;
    background-image:url(${albumUrl});
  }
  .title{
    margin: 5px 10px 0 0 ;
    font: 20px "Microsoft YaHei UI",Arial,Helvetica;
  }
  .item{
    font-size: 12px;
    color:#666666;
    display: flex;
    line-height: 35px;
    div{
      padding: 0 10px;
    }
  }
  .more{
    background-image:url(${albumUrl});
    background-repeat: no-repeat;
    background-position: 27px -227px;
    font-size: 12px;
    color: #666666;
    width: 50px;
    line-height: 35px;
  }
`