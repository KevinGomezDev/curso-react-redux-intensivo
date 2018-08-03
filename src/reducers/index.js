import { combineReducers } from 'redux';
import count from './count';
import post from './post';
import posts from './posts';
import users from './users';

export default combineReducers({
    count,
    post,
    posts,
    users,
});
