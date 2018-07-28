import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Spin, Modal } from 'antd';
import styles from './Posts.scss';

class Posts extends Component {
    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
    }

    handleClickOnPost = (e) => {
        e.preventDefault();
        const { fetchPost } = this.props;
        fetchPost(e.target.dataset.groupid);
    }

    render() {
        const { post, posts } = this.props;
        return (
            <Fragment>
                <Spin tip="Loading..." spinning={posts.isFetching}>
                    <div className={styles.posts}>
                        <h1>Posts</h1>
                        <ul>
                            {posts.data.map(item => (
                                <li key={item.id}>
                                    <a href="#" onClick={this.handleClickOnPost} data-groupId={item.id}>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Spin>
                <Modal
                    title={post.data && post.data.title}
                    visible={post.postId !== null}
                >
                    <p>
                        {post.data && post.data.body}
                    </p>
                </Modal>
            </Fragment>
        );
    }
}

Posts.propTypes = {
    posts: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        data: PropTypes.array.isRequired,
        error: PropTypes.any,
    }).isRequired,
    post: PropTypes.shape(),
    fetchPosts: PropTypes.func.isRequired,
    fetchPost: PropTypes.func.isRequired,
};

Posts.defaultProps = {
    post: null,
};

export default Posts;
