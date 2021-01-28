/*发现音乐组件*/
import React, {memo} from "react";
import {renderRoutes} from 'react-router-config';
import {NavLink} from "react-router-dom"

import {NavMenu} from './style.js';
import {navMenu} from '@/common/nav-list.js';
export default memo(function FindMusic(props) {
  //console.log(props.route.routes);
  return (
    <div>
      <NavMenu>
       <div>
         {
           navMenu.map((item,index)=>{
             return (<NavLink key={item.title} to={item.path}                className="nav-router">
                       <div>
                         {item.title}
                       </div>
                     </NavLink>)
           })
         }
       </div>
     </NavMenu>
     {renderRoutes(props.route.routes)}
    </div>
  )
})
