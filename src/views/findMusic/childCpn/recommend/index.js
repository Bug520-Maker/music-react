import React, {memo} from "react";

import TopBanner from './childCpn/topBanner/index';
function Recommend() {
    return (
        <div>
            <TopBanner/>
        </div>
    )
}
 export default memo(Recommend);










// const mapState=(state)=>{
//   return {
//       banners:state.recommendReducer.banners
//   }
// }
// const mapDispatch=(dispatch)=>{
//   return {
//     getRecBanners:()=>{
//       dispatch(getBannersAction())
//     }
//   }
// }
//
//  export default connect(mapState,mapDispatch)(memo(Recommend));
