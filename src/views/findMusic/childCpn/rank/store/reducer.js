import {Map} from 'immutable';
import {
    CHANGE_ALBUM_CONTENT
} from './constants'
const defaultState=Map({
    albumContent:{}
})
function reducer(state=defaultState,action)
{
    switch(action.type)
    {
        case CHANGE_ALBUM_CONTENT:
            return state.set('albumContent',action.albumContent);
        default:
            return state
    }
}
export default reducer;