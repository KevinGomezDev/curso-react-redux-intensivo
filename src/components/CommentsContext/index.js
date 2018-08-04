import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const MyContext = React.createContext();
export const MyContextConsumer = MyContext.Consumer;

export class MyProvider extends Component {
    state = {
        comments: [],
    };

    componentDidMount() {
        const { postId } = this.props;
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(result => this.setState({ comments: result.data }));

        console.log(this.state.comments);
    }

    render() {
        return (
            <MyContext.Provider value={{ comments: this.state.comments }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

MyProvider.propTypes = {
    postId: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
};

MyProvider.defaultProps = {
    postId: null,
    children: null,
};
