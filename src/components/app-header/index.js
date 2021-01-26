import React, {memo} from 'react';
import {NavLink} from "react-router-dom"
/*导入css文件*/
import {HeaderWrapper,
        HeaderContent,
        ContentRight
} from './style.js'
import backgroundImgUrl from "../../assets/img/topbar.png";

const GBAppHeader = memo(function() {
  return (
    <HeaderWrapper >
      <HeaderContent className="header-wrapper" backgroundUrl={backgroundImgUrl} >
        <a href="/" className="logo"> </a>
        <NavLink to="/">发现音乐</NavLink>
        <NavLink to="/myMusic">我的音乐</NavLink>
        <NavLink to="/friend">朋友</NavLink>
        <NavLink to="/market">商城</NavLink>
        <NavLink to="/artist">音乐人</NavLink>
        <NavLink to="/downloadClient">下载客户端</NavLink>
        <ContentRight>
           <div className="search-outer">
              <input type="text" placeholder="音乐/视频/电台/用户" className="search-input" />
           </div>
           <button className="creator">创作者中心</button>
           <div className="login">登录</div>
        </ContentRight>
      </HeaderContent>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
export default GBAppHeader
