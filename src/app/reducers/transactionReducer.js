import { transactionActionTypes as types } from "../actions/actionTypes";

export const initalState = {
    transactions: [],
    totalAmount: 0
};


export default function transactionReducer(state = initalState, action) {
    switch (action.type) {
        case types.fetchTransactionsSuccess:
            return Object.assign({}, state, {
                transactions: action.transactions,
                totalAmount: state.totalAmount + action.totalAmount
            });

        default:
            return state;
    }
}