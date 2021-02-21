import request from '../request'
export function djRadioCate()
{
    return request({
        url:'/dj/catelist'
    })
}