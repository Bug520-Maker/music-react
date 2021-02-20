import {combineReducers} from 'redux-immutable';

import {reducer as recommendReducer} from '../views/findMusic/childCpn/recommend/store';
import {reducer as playPageReducer} from '../views/play-bar/store/index';
import {reducer as rankReducer} from '../views/findMusic/childCpn/rank/store';
const reducer=combineReducers({
  recommendReducer,
  playPageReducer,
  rankReducer
})

export default reducer;
