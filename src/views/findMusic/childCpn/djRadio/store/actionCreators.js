import {
    djRadioCate,
    recProgram,
    programRank,
    cateRecommend
} from '../../../../../network/djRadio/index';
import{
    DJ_CATE,
    REC_PROGRAM,
    PROGRAM_RANK,
    CHANGE_CATE_RECOMMEND
} from './constants'
function changeDjCate(res)
{
    return {
        type:DJ_CATE,
        djcate:res
    }
}
function changeCateRecommend(res)
{
    return {
        type:CHANGE_CATE_RECOMMEND,
        cateRecommend:res
    }
}
function changeRecProgram(res)
{
    return{
        type:REC_PROGRAM,
        recProgram:res
    }
}
function changeProgramRank(res)
{
    return {
        type:PROGRAM_RANK,
        programRank:res
    }
}
export function getDjRadioCateAction()
{
    return dispatch=>{
        djRadioCate().then(data=>{
            dispatch(changeDjCate(data.categories))
            const promise=data.categories.map((item,index)=>{
                return cateRecommend(item.id)
            })
            /*获取推荐分类*/
            Promise.all(promise).then(data=>{
                dispatch(changeCateRecommend(data));
            })
        })
    }
}
/*推荐节目action*/
export function getRecProgramAction()
{
    return dispatch=>{
        recProgram().then(data=>{
            dispatch(changeRecProgram(data.programs))
        })
    }
}
/*节目榜*/
export function getProgramRankAction()
{
    return dispatch=>{
        programRank().then(data=>{
            dispatch(changeProgramRank(data.toplist))
        })
    }
}