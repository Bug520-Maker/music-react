import {Map} from 'immutable';
import{
    DJ_CATE
} from './constants'
const defaultState=Map({
    djcate:[]
})
export default function(state=defaultState,action)
{
    switch(action.type)
    {
        case DJ_CATE:
            return state.set('djcate',action.djcate);
        default:
            return state
    }
}