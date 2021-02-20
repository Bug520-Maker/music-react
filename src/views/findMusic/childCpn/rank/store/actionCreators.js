import {
    CHANGE_ALBUM_CONTENT
} from './constants';
import {albumContent} from '../../../../../network/rank/index';
function changeAlbumContent(res)
{
    return {
        type:CHANGE_ALBUM_CONTENT,
        albumContent:res
    }
}
export function getAlbumContentAction(id)
{
    return dispatch=>{
        albumContent(id).then(data=>{
            dispatch(changeAlbumContent(data.playlist))
        })
    }
}