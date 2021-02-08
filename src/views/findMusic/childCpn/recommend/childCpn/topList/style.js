import styled from 'styled-components';
import topListImg from '../../../../../../assets/img/toplist.png'
export const TopListWrapper=styled.div`
  background-image: url(${topListImg});
  margin: 20px 0 0 0;
  width:689px;
  height:472px;
  display: flex;
  .up-rank{
    margin: 20px 0 0 20px;
  }
  .new-rank{
    margin: 20px 0 0 20px;
  }
  .origin-rank{
    margin:20px 0 0 20px;
  }
`