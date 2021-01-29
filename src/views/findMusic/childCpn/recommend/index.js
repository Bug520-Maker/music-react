import React, {memo,useEffect} from "react";
import {connect} from 'react-redux';
import {getBannersAction} from './store/actionCreators.js'
 function Recommend(props) {
   const {getRecBanners}=props;
   useEffect(()=>{
     getRecBanners();
   },[getRecBanners])
 		return (
      <div>推荐</div>
 		)
 }
const mapState=(state)=>{
  return {
      banners:state.recommendReducer.banners
  }
}
const mapDispatch=(dispatch)=>{
  return {
    getRecBanners:()=>{
      dispatch(getBannersAction())
    }
  }
}

 export default connect(mapState,mapDispatch)(memo(Recommend));
