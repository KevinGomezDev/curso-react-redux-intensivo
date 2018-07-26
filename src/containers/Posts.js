import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCount, removeToCount } from '../actions/counter';
import Posts from '../pages/Posts';

const mapStateToProps = state => ({
    count: state.count,
    lastAction: state.lastAction,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addToCount,
    removeToCount,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
