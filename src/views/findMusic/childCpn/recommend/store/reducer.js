import {Map} from 'immutable';
import {
  CHANGE_BANNERS,
  CHANGE_HOT_RECOMMENDS,
    CHANGE_HOT_NEW_ALBUMS
} from './constants.js';

const defaultBanners=Map({
  banners:[],
  hotRecommends:[],
  newAlbums:[]
})
function reducer(state=defaultBanners,action)
{
  switch(action.type)
  {
    case CHANGE_BANNERS:
      return state.set('banners',action.banners);
    case CHANGE_HOT_RECOMMENDS:
      return state.set('hotRecommends',action.hotRecommends);
    case CHANGE_HOT_NEW_ALBUMS:
      return state.set('newAlbums',action.newAlbums)
    default:
      return state
  }
}
export default reducer;
