import {getSongDetail} from "../../../network/playPage/playPage";
import {SONG_DETAIL} from './constant'
function changeCurrentSong(res)
{
    return {
        type:SONG_DETAIL,
        currentSong:res
    }
}
export function getSongDetailAction(ids)
{
    return dispatch=>{
        getSongDetail(ids).then(data=>{
            //console.log(data.songs[0]);
            dispatch(changeCurrentSong(data.songs[0]))
        })
    }
}