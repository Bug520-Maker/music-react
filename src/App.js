import React,{memo,Suspense} from 'react';

import 'antd/dist/antd.css';

import {renderRoutes} from 'react-router-config';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';

import routes from "./router"
import GBAppHeader from "./components/app-header/index.js";
import GBAppFooter from "./components/app-footer/index.js";
import PlayPage from "./views/play-bar/index";
import store from './store';
const app=memo(function()
{
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GBAppHeader/>
          <Suspense fallback={<div>loading..</div>}>
              {renderRoutes(routes)}
          </Suspense>

        <GBAppFooter/>
        <PlayPage/>
      </BrowserRouter>
    </Provider>
  )
})
export default app;
