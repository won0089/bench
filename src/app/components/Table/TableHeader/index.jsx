import React from 'react';
import * as styles from '../style.css';

const TableHeader = (props) => {
    return (
        <div className={styles.tableHeaderContainer}>
            <div className={styles.date}>Date</div>
            <div className={styles.company}>Company</div>
            <div className={styles.account}>Account</div>
            <div className={styles.amount}>{props.totalAmount}</div>
        </div>
    );
};

export default TableHeader;