import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Table from '../Table';
import * as actions from '../../actions/transactionActions';
import * as styles from './style.css';

class BenchPage extends React.Component {
    componentDidMount() {
        this.props.actions.getTransactions();
    }

    render() {
        const transactions = this.props.transactions.map((transaction) => {
            return {
                date: transaction.Date,
                account: transaction.Ledger,
                company: transaction.Company,
                amount: transaction.Amount
            };
        });

        return ([
            <h1 key="1" className={styles.heading}> Bench Test </h1>,
            <section key="2">
                <Table totalAmount={this.props.totalAmount} transactions={transactions} />
            </section>
        ]);
    }
}

function mapStateToProps(state, ownProps) {
    return {
        transactions: state.transaction.transactions,
        totalAmount: state.transaction.totalAmount
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BenchPage);