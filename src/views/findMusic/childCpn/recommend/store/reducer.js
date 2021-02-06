import {Map} from 'immutable';
import {
  CHANGE_BANNERS,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_HOT_NEW_ALBUMS,
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGINAL_RANKING
} from './constants.js';

const defaultBanners=Map({
  banners:[],
  hotRecommends:[],
  newAlbums:[],
  upRanking:{},
  newRanking:{},
  originalRanking:{}
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
      return state.set('newAlbums',action.newAlbums);
    case CHANGE_UP_RANKING:
      return state.set('upRanking',action.upRanking);
    case CHANGE_NEW_RANKING:
      return state.set('newRanking',action.newRanking);
    case CHANGE_ORIGINAL_RANKING:
      return state.set('originalRanking',action.originalRanking);
    default:
      return state
  }
}
export default reducer;
