import {
    CHANGE_PLAYLIST_CATE,
    CHANGE_PLAYLISTS
} from './constants';
import {playListCate,topPlayList} from '../../../../../network/playList/index'
function changePlayListCate(res)
{
    return {
        type:CHANGE_PLAYLIST_CATE,
        playCateList:res
    }
}
function changePlayLists(res)
{
    return {
        type:CHANGE_PLAYLISTS,
        playLists:res
    }
}
export function getPlayListCateAction()
{
    return dispatch=>{
        playListCate().then(data=>{
            dispatch(changePlayListCate(data))
        })
    }
}
//获取全部歌单
export function getPlayListsAction(order,cat,limit,offset)
{
    return dispatch=>{
        topPlayList(order,cat,limit,offset).then(data=>{
            //console.log(data);
            dispatch(changePlayLists(data))
        })
    }
}