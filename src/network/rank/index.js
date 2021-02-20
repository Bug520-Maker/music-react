import request from '../request';
export function albumContent(id)
{
    return request({
        url:'/playlist/detail',
        params:{
            id
        }
    })
}