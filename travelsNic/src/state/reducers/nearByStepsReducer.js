import {
    GET_CURRENT_POSITION,
    SET_CURRENT_POSITION,
    SET_LOCATION_ERROR,
} from './../actions/nearByStopsAction';

export const nearByStopsReducer = (state = {}, action) => {

    switch(action.type) {
        case GET_CURRENT_POSITION: {
            const { nearByStops } = action.payload;
            const newState = { ...state, ...nearByStops };
            return newState;
        }
        case SET_CURRENT_POSITION: {
            const { nearByStops } = action.payload;
            const newState = { ...state, ...nearByStops };
            return newState;
        }
        case SET_LOCATION_ERROR: {
            const { nearByStops } = action.payload;
            const newState = { ...state, ...nearByStops }
            return newState;
        }
        default:
            return state;
    }

};