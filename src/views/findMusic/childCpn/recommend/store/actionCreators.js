import {
  getBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
  topListMsg
} from '../../../../../network/recommend/recommend.js';
import {
  CHANGE_BANNERS,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_HOT_NEW_ALBUMS,
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGINAL_RANKING,
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
/*飙升榜*/
export function changeUpLink(res)
{
  return {
    type:CHANGE_UP_RANKING,
    upRanking:res
  }
}
/*新歌榜*/
export function changeNewLink(res)
{
  return {
    type:CHANGE_NEW_RANKING,
    newRanking:res
  }
}
/*原创榜*/
export function changeOriginalLink(res)
{
  return {
    type:CHANGE_ORIGINAL_RANKING,
    originalRanking:res
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
     /* console.log(data);*/
      dispatch(changeHotNewAlbums(data.albums))
    })
  }
}
/*获取所有榜单*/
export function getTopListAction()
{
  return dispatch=>{
    getTopList().then(data=>{
      //console.log(data.list);
      const newTopList=data.list.filter((item,index)=>{
        return item.name==='飙升榜'||item.name==='新歌榜'||item.name==='原创榜'
      })
      for(let item of newTopList)
      {
        switch(item.name)
        {
          case '飙升榜':
            topListMsg(item.id).then(data=>{
              //console.log(data)
              dispatch(changeUpLink(data.playlist))
          });break;
          case '新歌榜':
            topListMsg(item.id).then(data=>{
              //console.log(data)
              dispatch(changeNewLink(data.playlist))
            });break;
          case '原创榜':
            topListMsg(item.id).then(data=>{
              //console.log(data)
              dispatch(changeOriginalLink(data.playlist))
            });break;
          default:

        }
      }
    })
  }
}
/*获取歌曲详情*/
/*
export function getSongMsgAction(id)
{
  return dispatch=>{
    songMsg(id).then(data=>{
      dispatch(changeRankSongs(data.songs));
    })
  }
}*/
