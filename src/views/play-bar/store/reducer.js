import {Map} from 'immutable';

import * as actionType from './constant';
const defaultState=Map({
    currentSong:{},
    currentSongIndex:0,
    playList:[],
    playQueue:0, //0随机 1 单曲 2循环,
    lyric:[],//歌曲歌词
    lyricItem:''//当前歌词的一句
})
function reducer(state=defaultState,action)
{
    switch(action.type)
    {
        case actionType.SONG_DETAIL:
            return state.set('currentSong',action.currentSong)
        case actionType.CURRENT_SONG_INDEX:
            return state.set('currentSongIndex',action.songIndex)
        case actionType.PLAY_LIST:
            return state.set('playList',action.playList)
        case actionType.CHANGE_QUEUE:
            return state.set('playQueue',action.playQueue)
        case actionType.CHANGE_LYRIC:
            return state.set('lyric',action.lyric)
        case actionType.CHANGE_LYRIC_ITEM:
            return state.set('lyricItem',action.lyricItem)
        default:
            return state
    }
}
export default reducer;