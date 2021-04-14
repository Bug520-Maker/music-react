import {Map} from 'immutable';
import {
    CHANGE_ARTIST_CATE
} from './constants'
const defaultState=Map({
  artistCate:{}
})
const reducer=function(state=defaultState,action)
{
    switch(action.type)
    {
        case CHANGE_ARTIST_CATE:
            return state.set('artistCate',action.artistCate);
        default:
            return state;
    }
}
export default reducer;