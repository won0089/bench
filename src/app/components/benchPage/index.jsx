import React from 'react';
import { connect } from 'react-redux';
import * as styles from './style.css';
import Table from '../Table';

class BenchPage extends React.Component {
    render() {
        const transactions = [{
            date: 1,
            account: 2,
            company: 3,
            amount: 4
        },
        {
            date: 1,
            account: 2,
            company: 3,
            amount: 4
        }];

        return ([
            <h1 key="1" className={styles.heading}> Bench Test </h1>,
            <section key="2">
                <Table totalAmount={17515151} transactions={transactions}/>
            </section>
        ]);
    }
}

export default connect()(BenchPage);