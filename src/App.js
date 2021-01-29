import React,{memo} from 'react';

import {renderRoutes} from 'react-router-config';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';

import routes from "./router"
import GBAppHeader from "./components/app-header/index.js";
import GBAppFooter from "./components/app-footer/index.js";

import store from './store';
const app=memo(function()
{
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GBAppHeader/>
        {renderRoutes(routes)}
        <GBAppFooter/>
      </BrowserRouter>
    </Provider>
  )
})
export default app;
