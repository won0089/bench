import { transactionActionTypes as types } from "../actions/actionTypes";
import { defaultState } from "../store/store";

export default function transactionReducer(state = [], action) {
    switch (action.type) {
        case types.fetchTransactionsSuccess:
            return action.transactions;
            
        default:
            return state;
    }
}