import React,{memo,useEffect} from 'react';

import {TopListWrapper} from './style'
import RecTheme from "../../../../../../components/recommend-theme";
import TopListCpn from '../../../../../../components/top-list/index'

import {getTopListAction} from "../../store/actionCreators";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

export default memo(function TopList(){
    const {upRanking}=useSelector(state=>({
        upRanking:state.getIn(['recommendReducer','upRanking'])
    }),shallowEqual)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getTopListAction())
    },[dispatch]);
    console.log(upRanking)
    return (
        <div>
            <RecTheme title="榜单"/>
            <TopListWrapper className="clearfix">
                <div className="up-rank">
                    <TopListCpn info={upRanking} className="list"/>
                </div>
            </TopListWrapper>
        </div>
    )
})