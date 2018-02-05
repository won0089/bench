import reducer, { initalState as defaultState } from '../transactionReducer';
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

    it('should update transactions and totalAmount on FETCH_TRANSACTIONS_SUCCESS', () => {
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

    it('should set isLoading to true on FETCH_TRANSACTIONS', () => {
        const state = reducer(initalState, {
            type: types.fetchTransactions
        });

        expect(state.isLoading).toEqual(true);
    });

    it('should set isLoading to false on FETCH_TRANSACTIONS_COMPLETE', () => {
        const state = reducer(initalState, {
            type: types.fetchTransactionsComplete
        });

        expect(state.isLoading).toEqual(false);
    });

    it('should set isLoading to false on FETCH_TRANSACTIONS_FAIL', () => {
        const state = reducer(initalState, {
            type: types.fetchTransactionsFail
        });

        expect(state.isLoading).toEqual(false);
    });

    it('should set state to initialState on CLEAR_TRANSACTIONS', () => {
        const state = reducer(initalState, {
            type: types.clearTransactions
        });

        expect(state).toEqual(defaultState);
    });
});