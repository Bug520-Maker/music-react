import {CHANGE_BANNERS} from './constants.js';

const defaultBanners={
  banners:[]
}
function reducer(state=defaultBanners,action)
{
  switch(action.type)
  {
    case CHANGE_BANNERS:
      return {...state,banners:action.banners};
    default:
      return state
  }
}
export default reducer;
