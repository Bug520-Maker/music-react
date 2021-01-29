import request from '../request.js';
/*获取推荐轮播图*/
export function getBanners()
{
  return request({
    url:'/banner'
  })
}
