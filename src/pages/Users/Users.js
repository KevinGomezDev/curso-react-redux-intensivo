import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Spin, Modal } from 'antd';
import styles from './Users.scss';

class Users extends Component {
    state = { visible: false }

    componentDidMount() {
        const { fetchUsers } = this.props;
        fetchUsers();
    }

    handleClickOnUser = (e) => {
        e.preventDefault();
        const { fetchUser } = this.props;
        this.setState({
            visible: true,
        });
        fetchUser(e.target.dataset.groupid);
    }

    hideModal = () => {
        console.log(this.state.visible);
        this.setState({
            visible: false,
        });
    }

    render() {
        const { user, users } = this.props;
        return (
            <Fragment>
                <Spin tip="Loading..." spinning={users.isFetching}>
                    <div className={styles.users}>
                        <h1>Users</h1>
                        <ul>
                            {users.data.map(item => (
                                <li key={item.id}>
                                    <a href="#" onClick={this.handleClickOnUser} data-groupid={item.id}>
                                        {item.username}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Spin>
                <Modal
                    title={user.data && user.data.username}
                    visible={user.userId !== null && this.state.visible}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}
                >
                    <p><strong>Name:</strong> {user.data && user.data.name}</p>
                    <p><strong>Email:</strong> {user.data && user.data.email}</p>
                    <p><strong>Phone:</strong> {user.data && user.data.phone}</p>
                </Modal>
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
    user: PropTypes.shape(),
    fetchUsers: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired,
};

Users.defaultProps = {
    user: null,
};

export default Users;
