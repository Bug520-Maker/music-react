/*推荐组件*/
import React, {memo} from "react";

import TopBanner from './childCpn/topBanner/index';
import HotRecommend from './childCpn/hotRecommend/index';
import NewAlbum from './childCpn/newAlbum/index';
import TopList from "./childCpn/topList/index";
import UserLogin from './childCpn/userLogin/index';
import SettleArtist from './childCpn/settleArtist/index';
import HotDjRadio from './childCpn/hotDjRadio'
import {Content,LeftContent,RightContent} from './style';

function Recommend() {
    return (
        <div>
            <TopBanner/>
            <Content>
                <LeftContent>
                    <HotRecommend/>
                    <NewAlbum/>
                    <TopList/>
                </LeftContent>
                <RightContent>
                    <UserLogin/>
                    {/*获取入驻歌手*/}
                    <SettleArtist/>
                    {/*热门主播*/}
                    <HotDjRadio/>
                </RightContent>
            </Content>
        </div>
    )
}
 export default memo(Recommend);