import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import * as styles from './style.css';

const Table = (props) => {
    return (
        <div className={styles.tableContainer}>
            <TableHeader totalAmount={props.totalAmount} />
            {props.transactions.map((transaction, idx) =>
                <TableRow key={idx} {...transaction} />)
            }
        </div>
    );
};

Table.propTypes = {
    transactions: PropTypes.array.isRequired,
    totalAmount: PropTypes.string.isRequired
}

export default Table;