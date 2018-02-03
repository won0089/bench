import React from 'react';
import { connect } from 'react-redux';
import * as styles from './style.css';

class BenchPage extends React.Component {
    render() {
        return ([
            <h1 key="1" className={styles.heading}> Bench Test </h1>,
            <section key="2">
                <div className={styles.tableContainer}>
                    <div className={styles.tableHeader}>
                        <div className={styles.date}>Date</div>
                        <div className={styles.company}>Company</div>
                        <div className={styles.account}>Account</div>
                        <div className={styles.ammount}>dollor</div>
                    </div>
                </div>
            </section>
        ]);
    }
}

export default connect()(BenchPage);