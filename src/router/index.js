import {Redirect} from "react-router";
import {lazy} from 'react'
const findMusic=lazy(()=>import('@/views/findMusic'))
const myMusic=lazy(()=>import('@/views/myMusic'))
const friend=lazy(()=>import('@/views/friend'))
const market=lazy(()=>import('@/views/market'))
const artist=lazy(()=>import('@/views/artist'))
const downloadClient=lazy(()=>import('@/views/downloadClient'))
const recommend=lazy(()=>import('../views/findMusic/childCpn/recommend/index.js'))
const rank=lazy(()=>import('../views/findMusic/childCpn/rank'))
const playList=lazy(()=>import('../views/findMusic/childCpn/playList'))
const djRadio=lazy(()=>import('../views/findMusic/childCpn/djRadio'))
const recArtist=lazy(()=>import('../views/findMusic/childCpn/artist'))
const newAlbum=lazy(()=>import('../views/findMusic/childCpn/newAlbum'))
const playPage=lazy(()=>import('../views/play-bar/play-page/index'))
const RankContent=lazy(()=>import('../views/findMusic/childCpn/rank/childCpn/rankContent/index'))
const playListDetail=lazy(()=>import("../components/content/playListDetail/index"));
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
      component:rank,
      routes:[
        {
          path:'/findMusic/rank/toplist',
          component:RankContent
        }
      ]
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
    },
    {
      path:'/findMusic/playListDetail',
      component:playListDetail
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
