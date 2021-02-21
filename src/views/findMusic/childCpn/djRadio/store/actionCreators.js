import {
    djRadioCate
} from '../../../../../network/djRadio/index';
import{
    DJ_CATE
} from './constants'
function changeDjCate(res)
{
    return {
        type:DJ_CATE,
        djcate:res
    }
}
export function getDjRadioCateAction()
{
    return dispatch=>{
        djRadioCate().then(data=>{
            dispatch(changeDjCate(data.categories))
        })
    }
}