import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';
import styles from './Posts.scss';

class Posts extends Component {
    componentDidMount() {
        const { addToCount } = this.props;
        setInterval(() => addToCount(), 1000);
    }

    render() {
        const { count, lastAction } = this.props;
        return (
            <div className={styles.posts}>
                <h1>Posts</h1>
                <Button><Icon type="plus" /></Button>
                <h3>{count}</h3>
                <h3>{lastAction}</h3>
                <Button><Icon type="minus" /></Button>
            </div>
        );
    }
}

Posts.propTypes = {
    count: PropTypes.number.isRequired,
    lastAction: PropTypes.string.isRequired,
    addToCount: PropTypes.func.isRequired,
};

export default Posts;
