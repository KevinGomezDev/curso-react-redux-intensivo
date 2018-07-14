import React from 'react';
import PropTypes from 'prop-types';
import Gato from '../Gato';
import './Sider.css';

const rows = ['A', 'B', 'C', 'D'];
const colums = ['1', '2', '3'];

const Sider = ({ title }) => (
    <aside className="Sider-Gato">
        <h3>{title}</h3>
        <Gato rows={rows} columns={colums} />
    </aside>
);

Sider.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Sider;
