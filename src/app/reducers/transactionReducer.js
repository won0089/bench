import { transactionActionTypes as types } from "../actions/actionTypes";

export const initalState = {
    transactions: [],
    totalAmount: 0,
    isLoading: false
};


export default function transactionReducer(state = initalState, action) {
    switch (action.type) {
        case types.fetchTransactionsSuccess:
            return Object.assign({}, state, {
                transactions: [...state.transactions, ...action.transactions],
                totalAmount: state.totalAmount + action.totalAmount
            });

        case types.fetchTransactions:
            return Object.assign({}, state, { isLoading: true });

        case types.fetchTransactionsComplete:
            return Object.assign({}, state, { isLoading: false });
            
        default:
            return state;
    }
}