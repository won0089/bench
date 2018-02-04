import transactionAPI from '../apis/transactionAPI';
import { transactionActionTypes as types } from './actionTypes';

export function getTransactions() {
    return async (dispatch) => {
        try {
            const transactionResponse = await transactionAPI.getTransactions().then(response => response.json());
            dispatch({
                type: types.fetchTransactionsSuccess,
                transactions: transactionResponse.transactions
            });
        } catch (error) {
            // error handling to be added
            console.log(error);
        }
    };
}