import initialState from './initialState';
import { ADD_COUNT } from '../actions/actionTypes';

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNT:
            return { ...state, count: state.count + 1 };
        default:
            return state;
    }
};
