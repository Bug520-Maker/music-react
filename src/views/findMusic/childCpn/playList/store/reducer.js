import {Map} from 'immutable';
import {
    CHANGE_PLAYLIST_CATE,
    CHANGE_PLAYLISTS
} from './constants'
const defaultState=Map({
    playCateList:{},
    playLists:{}
})
export default function reducer(state=defaultState,action)
{
    switch(action.type)
    {
        case CHANGE_PLAYLIST_CATE:
            return state.set('playCateList',action.playCateList);
        case CHANGE_PLAYLISTS:
            return state.set('playLists',action.playLists)
        default:
            return state
    }
}