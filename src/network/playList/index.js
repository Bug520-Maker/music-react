import request from '../request';
export function playListCate()
{
    return request({
        url:'/playlist/catlist'
    })
}
export function topPlayList(order,cat,limit,offset)
{
    return request({
        url:'/top/playlist',
        params:{
            order,
            cat,
            limit,
            offset
        }
    })
}
//获取歌单详情
export function getPlayListDetail(id,s=30)
{
    return request({
        url:'/playlist/detail',
        params:{
           id,
           s
        }
    })
}