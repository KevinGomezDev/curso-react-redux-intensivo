import React from 'react';
import PropTypes from 'prop-types';
import './DataList.css';

const DataList = ({ data }) => {
    if (!data || data.length === 0) return (<p>No Data</p>);

    return (
        <ul>
            {data.map((x, i) => <li key={i}>{x}</li>)}
        </ul>
    );
};

DataList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string)
};

DataList.defaultProps = {
    data: []
};

export default DataList;
