import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts, fetchPost } from '../actions/posts';
import Posts from '../pages/Posts';

const mapStateToProps = state => ({
    post: state.post,
    posts: state.posts,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPosts,
    fetchPost,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
