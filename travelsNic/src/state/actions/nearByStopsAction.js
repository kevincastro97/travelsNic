export const GET_CURRENT_POSITION = 'GET_CURRENT_POSITION';

const getCurrentPosition = payload => ({ type: GET_CURRENT_POSITION, payload });

export const requestPosition = () => {
    return getCurrentPosition({
        nearByStops: {
            state: 1,
        },
    });
};

export const SET_CURRENT_POSITION = 'SET_CURRENT_POSITION';

const setCurrentPosition = payload => ({ type: SET_CURRENT_POSITION, payload });

export const location = (latitude, longitude) => {
    return setCurrentPosition({
        nearByStops: {
            state: 2,
            latitude,
            longitude,
        },
    });
};

export const SET_LOCATION_ERROR = 'SET_LOCATION_ERROR';

const setLocationError = payload => ({ type: SET_LOCATION_ERROR, payload });

export const error = () => {
    return setLocationError({
        nearByStops: {
            state: 3,
        },
    });
};