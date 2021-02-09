import {combineReducers} from 'redux-immutable';

import {reducer as recommendReducer} from '../views/findMusic/childCpn/recommend/store';
import {reducer as playPageReducer} from '../views/play-bar/store/index';
const reducer=combineReducers({
  recommendReducer,
  playPageReducer,
})

export default reducer;
