import * as types from '../actionTypes';
import * as actions from '../transactionActions';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mockTransactions } from '../../apis/__mocks__/transactionAPI';

jest.mock('../../apis/transactionAPI');

describe('transaction actions test', () => {
    const initalState = {
        transactions: [],
        totalAmount: 0
    };
    const mockStore = configureMockStore([thunk]);

    let store;

    beforeEach(() => {
        store = mockStore(initalState);
    });

    it('should create FETCH_TRANSACTIONS_SUCCESS action and update transaction state', () => {
        const expectedTotalAmount = 3;
        const expectedAction = {
            type: types.transactionActionTypes.fetchTransactionsSuccess,
            transactions: mockTransactions,
            totalAmount: expectedTotalAmount
        };

        store.dispatch(actions.fetchTransactionsSuccess(mockTransactions));
        expect(store.getActions()[0]).toEqual({
            type: types.transactionActionTypes.fetchTransactionsSuccess,
            transactions: mockTransactions,
            totalAmount: 3
        });
    });

    it('should call FETCH_TRANSACTIONS, FETCH_TRANSACTIONS_SUCCESS, FETCH_TRANSACTIONS_COMPLETE in that order', async () =>{
        await store.dispatch(actions.getTransactions());
        expect(store.getActions().length).toEqual(3);
        expect(store.getActions()[0].type).toEqual(types.transactionActionTypes.fetchTransactions);
        expect(store.getActions()[1].type).toEqual(types.transactionActionTypes.fetchTransactionsSuccess);
        expect(store.getActions()[2].type).toEqual(types.transactionActionTypes.fetchTransactionsComplete);
    });

    it('should call CLEAR_TRANSACTIONS and FETCH_TRANSACTIONS in that order', async () => {
        await store.dispatch(actions.refreshTransactions());
        expect(store.getActions().length).toEqual(2);
        expect(store.getActions()[0].type).toEqual(types.transactionActionTypes.clearTransactions);
        expect(store.getActions()[1].type).toEqual(types.transactionActionTypes.fetchTransactions);
    });

    it('should call FETCH_TRANSACTIONS_FAIL, ERROR_OCCURED in that order', async () => {
        const testErrorMessage = "test error";
        await store.dispatch(actions.fetchTransactionsFail(testErrorMessage));
        expect(store.getActions().length).toEqual(2);
        expect(store.getActions()[0].type).toEqual(types.transactionActionTypes.fetchTransactionsFail);
        expect(store.getActions()[1].type).toEqual(types.errorActionTypes.errorOccured);
    });
});