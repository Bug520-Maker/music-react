import findMusic from "../views/findMusic";
import myMusic from "../views/myMusic";
import friend from "../views/friend";
import market from "../views/market";
import artist from "../views/artist";
import downloadClient from "../views/downloadClient";
const routes = [{
  path: '/',
  component:findMusic ,
  exact:true
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
  }
]
export default routes;
