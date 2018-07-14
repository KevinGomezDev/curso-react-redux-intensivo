import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import DataList from '../DataList';
import './Calculator.css';

class Calculator extends Component {
    state = {
        data: ['John', 'Sebas', 'Doe'],
        multiply: 2,
        list1: [],
        list2: [],
        list3: [],
    };

    constructor(props) {
        super(props);
    }

    handleClickOnButton = (multi) => {
        const { list1, list2 } = this.state;

        const number = Math.round(Math.random() * 10) * multi;
        if (multi === 1) {
            list1.push(number);
        } else {
            list2.push(number);
        }

        this.setState({ list1, list2, list3: [...list1, ...list2] });
    }

    render() {
        const { title, className } = this.props;
        const { data, list1, list2, list3 } = this.state;

        console.log(this.state);

        return (
            <div className={cx('Calc-root', className)}>
                <h1>{title}</h1>
                <button onClick={() => this.handleClickOnButton(1)}>0 - 10</button>
                <button onClick={() => this.handleClickOnButton(10)}>0 - 100</button>
                <DataList data={list1} />
                <DataList data={list2} />
                <hr />
                <DataList data={list3} />

                <hr />

                <DataList data={data} />
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
