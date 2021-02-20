import request from '../request.js';
/*获取推荐轮播图*/
export function getBanners()
{
  return request({
    url:'/banner'
  })
}
export function getHotRecommends(limit)
{
  return request({
    url:'/personalized',
    params:{
      limit
    }
  })
}
//新碟上架
export function getNewAlbums(limit)
{
  return request({
    url:'/top/album',
    params:{
      limit,
      offset:0,
      type:'hot',
      area:'ALL'
    }
  })
}
/*获取所有榜单*/
export function getTopList()
{
  return request({
    url:'/toplist',
  })
}
/*获取榜单详情*/
export function topListMsg(id)
{
  return request({
    url:'/playlist/detail',
    params:{
      id
    }
  })
}
/*获取歌曲详情*/
export function songMsg(id)
{
  const ids=id.join(",")
  return request({
    url:'/song/detail',
    params:{
      ids
    }
  })
}