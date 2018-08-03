import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

class Users extends Component {
    componentDidMount() {
        const { fetchUsers } = this.props;
        fetchUsers();
    }

    render() {
        const { users } = this.props;
        return (
            <Fragment>
                <Spin tip="Loading..." spinning={users.isFetching}>
                    <div>
                        <h1>Users</h1>
                        <ul>
                            {users.data.map(user => (
                                <li key={user.id}>
                                    {user.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Spin>
            </Fragment>
        );
    }
}

Users.propTypes = {
    users: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        data: PropTypes.array.isRequired,
        error: PropTypes.any,
    }).isRequired,
    fetchUsers: PropTypes.func.isRequired,
};

export default Users;
