import {Map} from 'immutable';
import{
    DJ_CATE,
    REC_PROGRAM,
    PROGRAM_RANK
} from './constants'
const defaultState=Map({
    djcate:[],//电台分类
    recProgram:[],//推荐节目
    programRank:[]
})
export default function(state=defaultState,action)
{
    switch(action.type)
    {
        case DJ_CATE:
            return state.set('djcate',action.djcate);
        case REC_PROGRAM:
            return state.set('recProgram',action.recProgram);
        case PROGRAM_RANK:
            return state.set('programRank',action.programRank)
        default:
            return state
    }
}