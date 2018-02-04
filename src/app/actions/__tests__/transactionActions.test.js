import { transactionActionTypes as types } from '../actionTypes';
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

    it('should create FETCH_TRANSACTIONS_SUCCESS action', async () => {
        const expectedTotalAmount = 3;
        const expectedAction = {
            type: types.fetchTransactionsSuccess,
            transactions: mockTransactions,
            totalAmount: expectedTotalAmount
        };

        store.dispatch(actions.getTransactions()).then((result) => {
            expect(store.getActions()[0]).toEqual({
                type: types.fetchTransactionsSuccess,
                transactions: mockTransactions,
                totalAmount: 3
            });
        });
    });
});