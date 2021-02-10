import {getLyric, getSongDetail} from "../../../network/playPage/playPage";
import {SONG_DETAIL,CURRENT_SONG_INDEX,PLAY_LIST,CHANGE_QUEUE,CHANGE_LYRIC,CHANGE_LYRIC_ITEM} from './constant'
import {getRandom} from "../../../utils/math-util";
import {getFormatLyric} from "../../../utils/lyric-format.util";

function changeCurrentSong(res)/*通过点击某一首歌曲*/
{
    return {
        type:SONG_DETAIL,
        currentSong:res
    }
}

function changeCurrentSongIndex(index){
    return {
        type:CURRENT_SONG_INDEX,
        songIndex:index
    }
}
function changePlayList(playlist)
{
    return {
        type:PLAY_LIST,
        playList:playlist
    }
}
function changeLyric(lyric)
{
    return {
        type:CHANGE_LYRIC,
        lyric:lyric
    }
}
export function changeLyricItemAction(lyric_item)//获取当前播放的一句歌词
{
    return {
        type:CHANGE_LYRIC_ITEM,
        lyricItem:lyric_item
    }
}
export function changePlayQueueAction(queueIndex)/*切换播放模式 随机，单曲循环，循环*/
{
    return {
        type:CHANGE_QUEUE,
        playQueue:queueIndex
    }
}
export function getSongDetailAction(ids)
{
    return (dispatch,getState)=>{
        const playList=getState().getIn(['playPageReducer','playList']);//获取用户播放列表
        const songIndex=playList.findIndex((item,index)=>{
            return item.id===ids
        })
        if(songIndex!==-1)/*找到歌曲*/
        {
            dispatch(changeCurrentSongIndex(songIndex));//改变当前歌曲索引为当前歌曲索引
            dispatch(changeCurrentSong(playList[songIndex]));//改变当前播放歌曲
            dispatch(getLyricAction(ids));//获取歌词
        }
        else{
            getSongDetail(ids).then(data=>{
                const song=data.songs[0];
                dispatch(changeCurrentSong(song));
                const newPlayList=[...playList];
                newPlayList.push(song);
                dispatch(changePlayList(newPlayList));
                dispatch(changeCurrentSongIndex(newPlayList.length-1));
                dispatch(getLyricAction(ids));
            })
        }

    }
}
export function changeCurrentSongAction(tag)
{
    return (dispatch,getState)=>{
        let queueIndex=getState().getIn(['playPageReducer','playQueue']);
        let currentSongIndex=getState().getIn(['playPageReducer','currentSongIndex']);
        let playList=getState().getIn(['playPageReducer','playList']);

        switch(queueIndex)
        {
            case 0:
                if(playList.length!==1)
                {
                    let randomIndex=getRandom(0,playList.length-1);
                    while(randomIndex===currentSongIndex){
                        randomIndex=getRandom(0,playList.length-1);
                        console.log(randomIndex)
                    }

                    currentSongIndex=randomIndex;
                }
                else if(playList.length===0||playList.length===1){
                    currentSongIndex=0;
                }
                break;
            default:
                currentSongIndex+=tag;
                if(currentSongIndex<0)
                {
                    currentSongIndex=playList.length-1;
                }
                if(currentSongIndex>=playList.length)
                {
                    currentSongIndex=0;
                }
        }
        dispatch(changeCurrentSong(playList[currentSongIndex]));
        //console.log(changeCurrentSong(playList[currentSongIndex]))
        dispatch(getLyricAction(playList[currentSongIndex].id));
        dispatch(changeCurrentSongIndex(currentSongIndex));
    }
}
export function getLyricAction(id){
    return (dispatch)=>{
        getLyric(id).then(data=>{
            const formatLyric=getFormatLyric(data.lrc.lyric)
            dispatch(changeLyric(formatLyric))
        })
    }
}