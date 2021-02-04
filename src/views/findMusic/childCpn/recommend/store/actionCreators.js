import {getBanners, getHotRecommends} from '../../../../../network/recommend/recommend.js';
import {
  CHANGE_BANNERS,
  CHANGE_HOT_RECOMMENDS
} from './constants.js';
export function changeBanners(res)
{
  return {
    type:CHANGE_BANNERS,
    banners:res
  }
}
export function changeHotRecommends(res)
{
  return{
    type:CHANGE_HOT_RECOMMENDS,
    hotRecommends:res
  }
}
export function getBannersAction(dispatch,getState)
{
  return (dispatch)=>{
    getBanners().then(res=>{
      //console.log(res);
      dispatch(changeBanners(res.banners));
    })
  }
}
/*获取热门推荐中的歌单*/
export function getHotRecommendsAction(limit)
{
  return dispatch=>{
    getHotRecommends(limit).then(data=>{
      //console.log(data.result)
      dispatch(changeHotRecommends(data.result))
    })
  }
}
