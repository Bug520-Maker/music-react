import React,{memo} from 'react';

import {PlayPageWrapper,LeftContent,RightContent} from './style'
export default memo(function PlayPage(){
    return (
        <PlayPageWrapper>
            <LeftContent></LeftContent>
            <RightContent></RightContent>
        </PlayPageWrapper>
    )
})