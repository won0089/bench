import reducer from '../transactionReducer';
import { transactionActionTypes as types } from '../../actions/actionTypes';

describe('transaction reducer  tests', () => {
    const initalState = {
        transactions: [],
        totalAmount: 5
    };

    const testTransactions = [{
        Date: "2013-12-17",
        Ledger: "",
        Amount: "907.85",
        Company: "PAYMENT RECEIVED - THANK YOU"
    }, {
        Date: "2013-12-17",
        Ledger: "Auto Expense",
        Amount: "6.23",
        Company: "SMART CITY FOODS xxxxxx3663 BC"
    }
    ];

    const testTotalAmount = 5;

    it('should update transactions and totalAmount', () => {
        const state = reducer(initalState, {
            type: types.fetchTransactionsSuccess,
            transactions: testTransactions,
            totalAmount: testTotalAmount
        });

        state.transactions.forEach((transaction, idx) => {
            expect(transaction.Date).toEqual(testTransactions[idx].Date);
            expect(transaction.Ledger).toEqual(testTransactions[idx].Ledger);
            expect(transaction.Amount).toEqual(testTransactions[idx].Amount);
            expect(transaction.Company).toEqual(testTransactions[idx].Company);
        });

        expect(state.totalAmount).toEqual(testTotalAmount + initalState.totalAmount);
    });
})