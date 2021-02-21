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