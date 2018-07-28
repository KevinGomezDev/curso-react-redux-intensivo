import { ADD_COUNT, REMOVE_COUNT } from './actionTypes';

export const addToCount = (value1 = 1, value2 = 0) => ({
    type: ADD_COUNT,
    payload: {
        value1,
        value2,
    },
});

export const removeToCount = (value1 = 1, value2 = 0) => ({
    type: REMOVE_COUNT,
    payload: {
        value1,
        value2,
    },
});
