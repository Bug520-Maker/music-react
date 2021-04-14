import {combineReducers} from 'redux-immutable';

import {reducer as recommendReducer} from '../views/findMusic/childCpn/recommend/store';
import {reducer as playPageReducer} from '../views/play-bar/store/index';
import {reducer as rankReducer} from '../views/findMusic/childCpn/rank/store';
import {reducer as playListReducer} from '../views/findMusic/childCpn/playList/store';
import {reducer as djRadioReducer} from '../views/findMusic/childCpn/djRadio/store';
import {reducer as artistReducer} from '../views/findMusic/childCpn/artist/store'
const reducer=combineReducers({
  recommendReducer,
  playPageReducer,
  rankReducer,
  playListReducer,
  djRadioReducer,
  artistReducer
})

export default reducer;
