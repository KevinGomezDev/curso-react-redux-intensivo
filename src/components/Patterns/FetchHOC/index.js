import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const FetchHOC = WrappedComponent =>
    class WithFetching extends Component {
        static propTypes = {
            postId: PropTypes.string,
        };

        static defaultProps = {
            postId: '0',
        };

        constructor(props) {
            super(props);

            this.state = {
                data: null,
            };
        }

        componentDidMount() {
            const url = `https://jsonplaceholder.typicode.com/posts/${this.props.postId}/comments`;
            axios.get(url)
                .then(result => this.setState({
                    data: result.data,
                }))
                .catch(error => this.setState({
                    error,
                }));
        }

        render() {
            return <WrappedComponent {...this.props} {...this.state} />;
        }
    };


export default FetchHOC;
