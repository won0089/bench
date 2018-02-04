import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../style.css';

const TableRow = (props) => {
    return (
        <div className={styles.tableRowContainer}>
            <div className={styles.date}>{props.date}</div>
            <div className={styles.company}>{props.company}</div>
            <div className={styles.account}>{props.account}</div>
            <div className={styles.amount}>{props.amount}</div>
        </div>
    );
};

TableRow.propTypes = {
    date: PropTypes.string,
    company: PropTypes.string,
    account: PropTypes.string,
    amount:  PropTypes.number 
}

export default TableRow;