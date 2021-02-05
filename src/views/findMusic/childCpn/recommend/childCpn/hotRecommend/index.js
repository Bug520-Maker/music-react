import React,{memo,useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import RecTheme from "../../../../../../components/recommend-theme";
import SongCover from '../../../../../../components/songs-cover/index';
import {getHotRecommendsAction} from "../../store/actionCreators";

import {PlayLists} from './style'

export default memo(function HotRecommend(){
    const {hotRecommends}=useSelector(state=>({
        hotRecommends:state.getIn(['recommendReducer','hotRecommends'])
    }),shallowEqual)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getHotRecommendsAction(8))
    },[dispatch])
    return (
        <div>
            <RecTheme title='热门推荐' keywords={['华语','流行','摇滚','民谣','电子']}/>
            <PlayLists>
                {
                    hotRecommends.map((item,index)=>{
                        return (
                            <div className="playList-item" key={item.id}>
                                <SongCover playList={item} />
                            </div>
                        )
                    })
                }
            </PlayLists>
        </div>
    )
})