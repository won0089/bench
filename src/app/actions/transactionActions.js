import transactionAPI from '../apis/transactionAPI';
import { transactionActionTypes as types } from './actionTypes';

export function getTransactions() {
    return async (dispatch) => {
        try {
            const transactionResponse = await transactionAPI.getTransactions();
            dispatch({
                type: types.fetchTransactionsSuccess,
                transactions: transactionResponse.transactions,
                // calculate total amount of transactions
                totalAmount: transactionResponse.transactions.reduce(
                    (totalAmount, transaction) => totalAmount + Number(transaction.Amount), 0)
            });
        } catch (error) {
            // error handling to be added
            console.log(error);
        }
    };
}