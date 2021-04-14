import request from "../request";
//获取歌手分类
export function artistCate(offset,limit,type,area)
{
    return request({
        url:'/artist/list',
        params:{
            offset,
            limit,
            type,
            area
        }
    })
}