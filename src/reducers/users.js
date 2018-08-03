import initialState from './initialState';
import { REQ_USERS, RCV_USERS, ERR_USERS } from '../actions/actionTypes';

export default (state = initialState.users, action) => {
    switch (action.type) {
        case REQ_USERS:
            return { ...state, isFetching: true };
        case RCV_USERS:
            return { ...state, isFetching: false, data: action.payload };
        case ERR_USERS:
            return { ...state, isFetching: false, error: action.payload };
        default:
            return state;
    }
};
