import axios from 'axios';
import {
    REQ_USERS, RCV_USERS, ERR_USERS,
    REQ_USER, RCV_USER, ERR_USER,
} from './actionTypes';

const requestUsers = () => ({
    type: REQ_USERS,
});

const receiveUsers = users => ({
    type: RCV_USERS,
    payload: users,
});

const catchUsers = error => ({
    type: ERR_USERS,
    payload: error,
});

export const fetchUsers = () => (dispatch) => {
    dispatch(requestUsers());
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(result => dispatch(receiveUsers(result.data)))
        .catch(err => dispatch(catchUsers(err)));
};

const requestUser = userId => ({
    type: REQ_USER,
    payload: userId,
});

const receiveUser = user => ({
    type: RCV_USER,
    payload: user,
});

const catchUser = error => ({
    type: ERR_USER,
    payload: error,
});

export const fetchUser = userId => (dispatch) => {
    dispatch(requestUser(userId));
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(result => dispatch(receiveUser(result.data)))
        .catch(err => dispatch(catchUser(err)));
};
