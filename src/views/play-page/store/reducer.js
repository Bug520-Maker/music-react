import {Map} from 'immutable';

import * as actionType from './constant';
const defaultState=Map({
    currentSong:{}
})
function reducer(state=defaultState,action)
{
    switch(action.type)
    {
        case actionType.SONG_DETAIL:
            return state.set('currentSong',action.currentSong)
        default:
            return state
    }
}
export default reducer;