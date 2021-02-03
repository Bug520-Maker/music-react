import {Map} from 'immutable';
import {
  CHANGE_BANNERS,
  CHANGE_HOT_RECOMMENDS
} from './constants.js';

const defaultBanners=Map({
  banners:[],
  hotRecommends:[]
})
function reducer(state=defaultBanners,action)
{
  switch(action.type)
  {
    case CHANGE_BANNERS:
      return state.set('banners',action.banners);
    case CHANGE_HOT_RECOMMENDS:
      return state.set('hotRecommends',action.hotRecommends)
    default:
      return state
  }
}
export default reducer;
