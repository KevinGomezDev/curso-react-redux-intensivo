import initialState from './initialState';
import { REQ_POST, RCV_POST, ERR_POST } from '../actions/actionTypes';

export default (state = initialState.post, action) => {
    switch (action.type) {
        case REQ_POST:
            return { ...state, isFetching: true, postId: action.payload };
        case RCV_POST:
            return { ...state, isFetching: false, data: action.payload };
        case ERR_POST:
            return { ...state, isFetching: false, error: action.payload };
        default:
            return state;
    }
};
