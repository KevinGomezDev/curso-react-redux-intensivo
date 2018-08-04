import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../actions/users';
import Users from '../pages/Users';

const mapStateToProps = state => ({
    users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUsers,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);
