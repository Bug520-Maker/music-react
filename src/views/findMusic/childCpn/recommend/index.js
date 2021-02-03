import React, {memo,useEffect} from "react";
import {useDispatch} from 'react-redux'

import TopBanner from './childCpn/topBanner/index';
import RecTheme from '../../../../components/recommend-theme/index';
import {getHotRecommendsAction} from "./store/actionCreators";

import {Content,LeftContent,RightContent} from './style';
function Recommend() {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getHotRecommendsAction(8))
    },[dispatch])
    return (
        <div>
            <TopBanner/>
            <Content>
                <LeftContent>
                    <RecTheme title='热门推荐' keywords={['华语','流行','摇滚','民谣','电子']}/>
                </LeftContent>
                <RightContent></RightContent>
            </Content>
        </div>
    )
}
 export default memo(Recommend);