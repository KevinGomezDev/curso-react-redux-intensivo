import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './Gato.css';

const Gato = ({ rows, columns }) => (
    <table>
        <tbody>
            {rows.map(r => (
                <tr key={r}>
                    {columns.map(c => (
                        <td key={c}>
                            <Button text={`${r} - ${c}`} />
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

Gato.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.string),
    columns: PropTypes.arrayOf(PropTypes.string),
};

Gato.defaultProps = {
    rows: [],
    columns: [],
};

export default Gato;
