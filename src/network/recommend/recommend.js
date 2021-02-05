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
export function getNewAlbums(limit)
{
  return request({
    url:'/top/album',
    params:{
      limit,
      type:'hot',
      area:'ZH',
    }
  })
}