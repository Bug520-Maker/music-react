import {combineReducers} from 'redux';

import {reducer as recommendReducer} from '@/views/findMusic/childCpn/recommend/store'
const reducer=combineReducers({
  recommendReducer,
})

export default reducer;
