import { combineReducers } from 'redux'

import { linesReducer } from './linesReducer';
import { NearByStopsReducer } from './nearByStepsReducer';

export const reducers = combineReducers({
    lines: linesReducer,
    nearByStops: NearByStopsReducer,
});
