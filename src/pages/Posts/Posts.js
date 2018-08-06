import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Spin, Modal } from 'antd';
import styles from './Posts.scss';
import Comments from '../../components/Comments/Comments';

class Posts extends Component {
    state = { visible: false };

    componentDidMount() {
        const { fetchPosts } = this.props;
        fetchPosts();
    }

    handleClickOnPost = (e) => {
        e.preventDefault();
        const { fetchPost } = this.props;
        this.setState({
            visible: true,
        });
        fetchPost(e.target.dataset.groupid);
    }

    hideModal = () => {
        this.setState({
            visible: false,
        });
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
                                    <a href="#" onClick={this.handleClickOnPost} data-groupid={item.id}>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Spin>
                <Modal
                    title={post.data && post.data.title}
                    visible={post.postId !== null && this.state.visible}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}
                >
                    <p>{post.data && post.data.body}</p>
                    <Comments key={post.postId} postId={post.postId} />
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
