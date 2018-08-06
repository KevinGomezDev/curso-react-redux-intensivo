import initialState from './initialState';
import { REQ_USER, RCV_USER, ERR_USER } from '../actions/actionTypes';

export default (state = initialState.user, action) => {
    switch (action.type) {
        case REQ_USER:
            return { ...state, isFetching: true, userId: action.payload };
        case RCV_USER:
            return { ...state, isFetching: false, data: action.payload };
        case ERR_USER:
            return { ...state, isFetching: false, error: action.payload };
        default:
            return state;
    }
};
