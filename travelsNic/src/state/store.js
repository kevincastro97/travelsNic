import { createStore } from 'redux';
import { reducers } from './reducers/index'

const initialState = {
    lines: {
        data: [],
        id: '',
    },
};

export const store = createStore(
    reducers,
    initialState,
);