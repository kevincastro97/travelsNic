export const SET_DATA_LINE = 'SET_DATA_LINE';

const setDataLine = payload => ({ type: SET_DATA_LINE, payload });

export const dataLine = (data = []) => {
    return setDataLine({
        line: {
            data
        },
    });
};

export const SET_FILTER_DATA_LINE = 'SET_FILTER_DATA_LINE';

const setFilterDataLine = payload => ({ type: SET_FILTER_DATA_LINE, payload });

export const filterDataLine = (id = '') => {
    return setFilterDataLine({
        line: {
            id
        },
    });
};