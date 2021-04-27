import React,{memo,useEffect} from 'react';
import {withRouter} from "react-router-dom"
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import RecTheme from "../../../../../../components/recommend-theme";
import SongCover from '../../../../../../components/songs-cover/index';
import {getHotRecommendsAction} from "../../store/actionCreators";

import {PlayLists} from './style'
function HotRecommend(props){
    const {hotRecommends}=useSelector(state=>({
        hotRecommends:state.getIn(['recommendReducer','hotRecommends'])
    }),shallowEqual)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getHotRecommendsAction(8))
    },[dispatch])
    //function
    const playListRouter=(item)=>{
        props.history.push({
            pathname:'/findMusic/playListDetail',
            state:{
                playlistId:item.id
            }
        });

    }
    return (
        <div>
            <RecTheme title='热门推荐' keywords={['华语','流行','摇滚','民谣','电子']}/>
            <PlayLists>
                {
                    hotRecommends.map((item,index)=>{
                        return (
                            <div className="playList-item" key={item.id} onClick={e=>playListRouter(item)}>
                                <SongCover playList={item} />
                            </div>
                        )
                    })
                }
            </PlayLists>
        </div>
    )
}
export default withRouter(memo(HotRecommend));