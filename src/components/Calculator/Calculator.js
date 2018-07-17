import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import LifeCycle from '../LifeCycle';
import './Calculator.css';

class Calculator extends Component {
    state = {
        showLifeCycle: true,
        counter: 0,
        childCounter: 0,
    }

    handleClickOnToggleButton = () => {
        // const { showLifeCycle } = this.state;
        this.setState(state => ({
            counter: state.counter + 1,
        }));
        // this.setState({ showLifeCycle: !showLifeCycle });
    }

    componentWillUnmount() {
        console.log('UNMOUNT PAPA');
    }

    render() {
        const { className } = this.props;
        const { showLifeCycle, counter, childCounter } = this.state;

        console.log('RENDER PAPA!');

        return (
            <div className={cx('Calc-root', className)}>
                <h1>LifeCycle: {counter}</h1>
                {showLifeCycle && <LifeCycle counterProp={counter} />}
                <hr />
                <button onClick={this.handleClickOnToggleButton}>Toggle LifeCycle</button>
            </div>
        );
    }
}

Calculator.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
};

Calculator.defaultProps = {
    className: null,
};

export default Calculator;
