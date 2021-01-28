import React, {memo} from 'react';
import {NavLink} from "react-router-dom"
/*导入css文件*/
import {HeaderWrapper,
        HeaderContent,
        ContentRight,
} from './style.js'

import backgroundImgUrl from "../../assets/img/topbar.png";

import {navList} from '@/common/nav-list.js';

const GBAppHeader = memo(function() {
  return (
     <div>
       <HeaderWrapper >
         <HeaderContent className="header-wrapper" backgroundUrl={backgroundImgUrl} >
           <a href="/" className="logo"> </a>
           {
             navList.map((item,index)=>{
               return (<NavLink to={item.path} key={item.title}>
                      {item.title}
                       <i className="nav-index"></i>
                      </NavLink>)
             })
           }
           <ContentRight>
              <div className="search-outer">
                  <i className="search-icon"></i>
                 <input type="text" placeholder="音乐/视频/电台/用户" className="search-input" />
              </div>
              <button className="creator">创作者中心</button>
              <div className="login">登录</div>
           </ContentRight>
         </HeaderContent>
         {/*红色分界线*/}
         <div className="divider"></div>
       </HeaderWrapper>
     </div>
  )
})
export default GBAppHeader
