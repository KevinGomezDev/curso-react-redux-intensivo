import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
        };
    }

    handleChangeOnFirstName = (e) => {
        const { user } = this.state;
        user[e.target.name] = e.target.value;
        this.setState({ user });
    }

    handleSubmitOnForm = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(data.get('firstName'));
    }

    render() {
        const { user, onChange } = this.props;

        return (
            <form>
                <h3>My Form</h3>
                <input
                    name="firstName"
                    type="text"
                    value={user.firstName}
                    onChange={onChange}
                />
                <input
                    name="lastName"
                    type="text"
                    value={user.lastName}
                    onChange={onChange}
                />
                <select name="gender" onChange={onChange} value={user.gender}>
                    <option value={1}>Male</option>
                    <option value={2}>Female</option>
                    <option value={3}>Others</option>
                </select>
                <br /><br />
                <label>
                    <input
                        type="radio"
                        name="active"
                        value={true}
                        onChange={onChange}
                        checked={user.active}
                    />
                    Active
                </label>
                &nbsp;&nbsp;&nbsp;
                <label>
                    <input
                        type="radio"
                        name="active"
                        value={false}
                        onChange={onChange}
                        checked={!user.active}
                    />
                    Inactive
                </label>
                <br /><br />
                <button type="submit">Submit!</button>
            </form>
        );
    }
}

Form.propTypes = {
    user: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
    }).isRequired,
    onChange: PropTypes.func,
};

Form.defaultProps = {
    onChange() {}
};

export default Form;
