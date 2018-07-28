import { combineReducers } from 'redux';
import count from './count';
import post from './post';
import posts from './posts';

export default combineReducers({
    count,
    post,
    posts,
});
