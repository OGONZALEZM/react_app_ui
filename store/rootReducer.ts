import { combineReducers } from 'redux';

import filterReducer from './filterSlice';
import restaurantReducer from './restaurantSlice';

const rootReducer = combineReducers({
  filter: filterReducer,
  restaurant: restaurantReducer
});

export default rootReducer;