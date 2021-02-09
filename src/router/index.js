import {Redirect} from "react-router";

import findMusic from "@/views/findMusic";
import myMusic from "@/views/myMusic";
import friend from "@/views/friend";
import market from "@/views/market";
import artist from "@/views/artist";
import downloadClient from "@/views/downloadClient";

import recommend from "../views/findMusic/childCpn/recommend/index.js";
import rank from "../views/findMusic/childCpn/rank";
import playList from '../views/findMusic/childCpn/playList';
import djRadio from '../views/findMusic/childCpn/djRadio';
import recArtist from '../views/findMusic/childCpn/artist';
import newAlbum from '../views/findMusic/childCpn/newAlbum';
import playPage from '../views/play-bar/play-page/index';
const routes =[
{
  path:'/',
  exact:true,
  render:()=>{
    return <Redirect to="/findMusic"/>
  }
},
{
  path: '/findMusic',
  component:findMusic ,
  routes:[
    {
      path:'/findMusic',
      exact:true,
      render:()=>{
        return <Redirect to='/findMusic/recommend' />
      }
    },
    {
      path:'/findMusic/recommend',
      component:recommend
    },
    {
      path:'/findMusic/rank',
      component:rank
    },
    {
      path:'/findMusic/playList',
      component:playList
    },
    {
      path:'/findMusic/djRadio',
      component:djRadio
    },
    {
      path:'/findMusic/recArtist',
      component:recArtist
    },
    {
      path:'/findMusic/newAlbum',
      component:newAlbum
    },
    {
      path:'/findMusic/player',
      component:playPage
    }
  ]
},
{
  path: '/myMusic',
  component:myMusic ,
},
{
  path: '/friend',
  component:friend ,
},
{
  path: '/market',
  component:market
},
{
  path: '/artist',
  component:artist
},
  {
    path: '/downloadClient',
    component: downloadClient
  },
]
export default routes;
