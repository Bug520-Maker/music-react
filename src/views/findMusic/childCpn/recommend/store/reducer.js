import {CHANGE_BANNERS} from './constants.js';
import {Map} from 'immutable';
const defaultBanners=Map({
  banners:[]
})
function reducer(state=defaultBanners,action)
{
  switch(action.type)
  {
    case CHANGE_BANNERS:
      return state.set('banners',action.banners);
    default:
      return state
  }
}
export default reducer;
