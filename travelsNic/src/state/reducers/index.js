import { combineReducers } from 'redux'

import { linesReducer } from './linesReducer';

export const reducers = combineReducers({
    lines: linesReducer,
});
