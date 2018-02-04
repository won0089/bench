import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import * as styles from './style.css';

const Table = (props) => {
    return (
        <div className={styles.tableContainer}>
            <TableHeader totalAmount={props.totalAmount} />
            {props.transactions.map((transaction, idx) =>
                <TableRow key={idx} {...transaction} />)}
        </div>
    );
};

export default Table;