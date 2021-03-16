import {Map} from 'immutable';
import{
    DJ_CATE,
    REC_PROGRAM,
    PROGRAM_RANK,
    CHANGE_CATE_RECOMMEND
} from './constants'
const defaultState=Map({
    djcate:[],//电台分类
    recProgram:[],//推荐节目
    programRank:[],
    //获取电台分类推荐
    cateRecommend:[]
})
function reducer(state=defaultState,action)
{
    switch(action.type)
    {
        case DJ_CATE:
            return state.set('djcate',action.djcate);
        case REC_PROGRAM:
            return state.set('recProgram',action.recProgram);
        case PROGRAM_RANK:
            return state.set('programRank',action.programRank);
        case CHANGE_CATE_RECOMMEND:
            return state.set('cateRecommend',action.cateRecommend);
        default:
            return state
    }
}
export default reducer;