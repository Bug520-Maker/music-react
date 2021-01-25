import React,{memo} from 'react';

import {renderRoutes} from 'react-router-config';
import {BrowserRouter} from "react-router-dom"

import routes from "./router"
import GBAppHeader from "./components/app-header/index.js";
import GBAppFooter from "./components/app-footer/index.js";
const app=memo(function()
{
  return (
    <BrowserRouter>
      <GBAppHeader/>
      {renderRoutes(routes)}
      <GBAppFooter/>
    </BrowserRouter>
  )
})
export default app
