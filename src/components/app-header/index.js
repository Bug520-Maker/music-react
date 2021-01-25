import React, {memo} from 'react';
import {NavLink} from "react-router-dom"

const GBAppHeader = memo(function() {
  return (
    <div >
      <NavLink to="/">发现音乐</NavLink>
      <NavLink to="/myMusic">我的音乐</NavLink>
      <NavLink to="/friend">朋友</NavLink>
      <NavLink to="/market">商城</NavLink>
      <NavLink to="/artist">音乐人</NavLink>
      <NavLink to="/downloadClient">下载客户端</NavLink>
    </div>
  )
})
export default GBAppHeader
