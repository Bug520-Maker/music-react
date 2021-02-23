import request from '../request'
export function djRadioCate()
{
    return request({
        url:'/dj/catelist'
    })
}
/*推荐节目*/
export function recProgram()
{
    return request({
        url:'/program/recommend',
    })
}
/*节目榜*/
export function programRank()
{
    return request({
        url:'/dj/program/toplist',
        params:{
            offset:0,
            limit:10
        }
    })
}