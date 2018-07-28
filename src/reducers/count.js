import initialState from './initialState';
import { ADD_COUNT, REMOVE_COUNT } from '../actions/actionTypes';

export default (state = initialState.count, action) => {
    switch (action.type) {
        case ADD_COUNT: {
            const { value1, value2 } = action.payload;
            return (state.count + value1) - value2;
        }
        case REMOVE_COUNT:
            return (state.count - action.payload.value1) + action.payload.value2;
        default:
            return state;
    }
};
