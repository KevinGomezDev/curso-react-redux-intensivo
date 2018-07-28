import axios from 'axios';
import {
    REQ_POSTS, RCV_POSTS, ERR_POSTS,
    REQ_POST, RCV_POST, ERR_POST,
} from './actionTypes';

const requestPosts = () => ({
    type: REQ_POSTS,
});

const receivePosts = posts => ({
    type: RCV_POSTS,
    payload: posts,
});

const catchPosts = error => ({
    type: ERR_POSTS,
    payload: error,
});

export const fetchPosts = () => (dispatch) => {
    dispatch(requestPosts());
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(result => dispatch(receivePosts(result.data)))
        .catch(err => dispatch(catchPosts(err)));
};

const requestPost = postId => ({
    type: REQ_POST,
    payload: postId,
});

const receivePost = post => ({
    type: RCV_POST,
    payload: post,
});

const catchPost = error => ({
    type: ERR_POST,
    payload: error,
});

export const fetchPost = postId => (dispatch) => {
    dispatch(requestPost(postId));
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(result => dispatch(receivePost(result.data)))
        .catch(err => dispatch(catchPost(err)));
};
