import axios from 'axios';
import {
    REQ_USERS, RCV_USERS, ERR_USERS,
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
