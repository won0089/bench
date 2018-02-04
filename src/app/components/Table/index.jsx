import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import * as styles from './style.css';

const Table = (props) => {
    return (
        <div className={styles.tableContainer}>
            <TableHeader totalAmount={1234567} />
            {props.transactions.map((transaction) => <TableRow {...transaction}/>)}
        </div>
    );
};

export default Table;