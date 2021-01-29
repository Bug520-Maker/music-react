import {getBanners} from '../../../../../network/recommend/recommend.js';
import {CHANGE_BANNERS} from './constants.js';
export function changeBanners(res)
{
  return {
    type:CHANGE_BANNERS,
    banners:res
  }
}
export function getBannersAction(dispatch,getState)
{
  return (dispatch)=>{
    getBanners().then(res=>{
      console.log(res);
      dispatch(changeBanners(res.banners));
    })
  }
}
