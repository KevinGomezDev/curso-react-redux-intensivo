import initialState from './initialState';
import { REQ_POSTS, RCV_POSTS, ERR_POSTS } from '../actions/actionTypes';

export default (state = initialState.posts, action) => {
    switch (action.type) {
        case REQ_POSTS:
            return { ...state, isFetching: true };
        case RCV_POSTS:
            return { ...state, isFetching: false, data: action.payload };
        case ERR_POSTS:
            return { ...state, isFetching: false, error: action.payload };
        default:
            return state;
    }
};
