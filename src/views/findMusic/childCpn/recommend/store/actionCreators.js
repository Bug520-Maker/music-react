import {getBanners, getHotRecommends, getNewAlbums} from '../../../../../network/recommend/recommend.js';
import {
  CHANGE_BANNERS,
  CHANGE_HOT_RECOMMENDS,
    CHANGE_HOT_NEW_ALBUMS
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
export function changeHotNewAlbums(res)
{
  return {
    type:CHANGE_HOT_NEW_ALBUMS,
    newAlbums:res
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
/*获取热门推荐中的新碟上架*/
export function getHotNewAlbumAction(limit)
{
  return dispatch=>{
    getNewAlbums(limit).then(data=>{
      //console.log(data.albums);
      dispatch(changeHotNewAlbums(data.albums))
    })
  }
}
