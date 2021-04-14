import {
    CHANGE_ARTIST_CATE
} from './constants';
import {
    artistCate
} from "../../../../../network/artist";
function changeArtistCate(res)
{
    return {
        type:CHANGE_ARTIST_CATE,
        artistCate:res
    }
}
export function getArtistCateAction(offset,limit,type,area)
{
    return dispatch=>{
        artistCate(offset,limit,type,area).then(data=>{
            console.log(data)
            dispatch(changeArtistCate(data.artists));
        })
    }
}