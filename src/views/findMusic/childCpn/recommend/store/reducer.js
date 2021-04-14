import {Map} from 'immutable';
import {
  CHANGE_BANNERS,
  CHANGE_HOT_RECOMMENDS,
  CHANGE_HOT_NEW_ALBUMS,
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGINAL_RANKING,
  CHANGE_HOT_RANKING,
  CHANGE_ALL_RANKING,
  CHANGE_CATE_RECOMMEND,
  CHANGE_SETTLE_ARTIST
} from './constants.js';

const defaultBanners=Map({
  banners:[],
  hotRecommends:[],
  newAlbums:[],
  upRanking:{},
  newRanking:{},
  originalRanking:{},
  hotRanking:{},
  allRanking:{},
  settleArtist:[]
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
    case CHANGE_HOT_RANKING:
      return state.set('hotRanking',action.hotRanking);
    case CHANGE_ALL_RANKING:
      return state.set('allRanking',action.allRanking);
    case CHANGE_SETTLE_ARTIST:
      return state.set('settleArtist',action.settleArtist)
    default:
      return state
  }
}
export default reducer;
