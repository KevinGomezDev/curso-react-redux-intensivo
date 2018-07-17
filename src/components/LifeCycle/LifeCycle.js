import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycle extends Component {
    static getDerivedStateFromProps(props, state) {
        return { ...state };
    }

    state = {
        counter: 0,
    }

    componentDidMount() {
        // console.log('DID MOUNT');
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('SHOULD!');
        return newProps.counterProp % 10 === 0;
    }

    componentDidUpdate() {
        // console.log('DID UPDATE');
    }

    componentWillUnmount() {
        // console.log('UNMOUNT HIJO');
    }

    handleClickOnButton = () => {
        const { counter } = this.state;
        this.setState({ counter: counter + 1 });
    }

    render() {
        const { counterProp } = this.props;
        console.log('RENDER HIJO');
        return (
            <div>
                <p>LifeCycle Component: {counterProp}</p>
                <button onClick={this.handleClickOnButton}>Click Me</button>
            </div>
        );
    }
}

LifeCycle.propTypes = {
    counterProp: PropTypes.number.isRequired,
};

export default LifeCycle;
