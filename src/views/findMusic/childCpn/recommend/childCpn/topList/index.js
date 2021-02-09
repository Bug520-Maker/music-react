import React,{memo,useEffect} from 'react';

import {TopListWrapper} from './style'
import RecTheme from "../../../../../../components/recommend-theme";
import TopListCpn from '../../../../../../components/top-list/index'

import {getTopListAction} from "../../store/actionCreators";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

export default memo(function TopList(){
    //redux-hook
    const {upRanking}=useSelector(state=>{
        return {upRanking:state.getIn(['recommendReducer','upRanking'])}
    },shallowEqual);
    const {newRanking}=useSelector(state=>({
        newRanking:state.getIn(['recommendReducer','newRanking'])
    }),shallowEqual)
    const {originalRanking}=useSelector(state=>({
        originalRanking:state.getIn(['recommendReducer','originalRanking'])
    }),shallowEqual)
    const dispatch=useDispatch();
    //other hook
    useEffect(()=>{
        dispatch(getTopListAction())
    },[dispatch]);
   // console.log(upRanking)
    return (
        <div>
            <RecTheme title="榜单"/>
            <TopListWrapper className="clearfix">
                <div className="up-rank">
                    <TopListCpn info={upRanking}/>
                </div>
                <div className="new-rank">
                    <TopListCpn info={newRanking}/>
                </div>
                <div className="origin-rank">
                    <TopListCpn info={originalRanking}/>
                </div>
            </TopListWrapper>
        </div>
    )
})