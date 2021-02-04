/*推荐组件*/
import React, {memo,useEffect} from "react";

import TopBanner from './childCpn/topBanner/index';
import HotRecommend from './childCpn/hotRecommend/index';
import NewAlbum from './childCpn/newAlbum/index';

import {Content,LeftContent,RightContent} from './style';
function Recommend() {
    return (
        <div>
            <TopBanner/>
            <Content>
                <LeftContent>
                    <HotRecommend/>
                    <NewAlbum/>
                </LeftContent>
                <RightContent></RightContent>
            </Content>
        </div>
    )
}
 export default memo(Recommend);