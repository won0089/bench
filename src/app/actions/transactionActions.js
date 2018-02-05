import transactionAPI from '../apis/transactionAPI';
import { transactionActionTypes as types } from './actionTypes';
import * as errorActions from './errorActions';

export function getTransactions() {
    return async (dispatch) => {
        try {
            dispatch(fetchTransactions());

            const firstPage = await transactionAPI.getTransactions(1);
            dispatch(fetchTransactionsSuccess(firstPage.transactions));

            // first page contains total number of transactions
            // assuming each page contains same number of transactions as the
            // first page
            const totalPages =
                Math.round(firstPage.totalCount / firstPage.transactions.length);
            const pageIterator = function* (currentPage) {
                while (currentPage < totalPages) {
                    yield currentPage + 1;
                    currentPage++;
                }
            };

            for (const pageNumber of pageIterator(firstPage.page)) {
                const page = await transactionAPI.getTransactions(pageNumber);
                dispatch(fetchTransactionsSuccess(page.transactions));
            }

            dispatch(fetchTransactionsComplete());
        } catch (error) {
            const errorMessage = error.status === 404 ?
                'Page does not exist' : 'Could not fetch transactions';
            dispatch(fetchTransactionsFail(new Error(errorMessage)));
        }
    };
}

export function fetchTransactionsSuccess(transactions) {
    return {
        type: types.fetchTransactionsSuccess,
        transactions,
        // calculate total amount of transactions
        totalAmount: transactions.reduce(
            (totalAmount, transaction) =>
                totalAmount + Number(transaction.Amount), 0)
    };
}

export function fetchTransactions() {
    return {
        type: types.fetchTransactions
    };
}

export function fetchTransactionsComplete() {
    return {
        type: types.fetchTransactionsComplete
    };
}

export function fetchTransactionsFail(error) {
    return async (dispatch) => {
        dispatch({ type: types.fetchTransactionsFail });
        dispatch(errorActions.errorOccured(error));
    }
}

export function refreshTransactions() {
    return async (dispatch) => {
        dispatch(clearTransactions());
        dispatch(getTransactions());
    }
}

export function clearTransactions() {
    return {
        type: types.clearTransactions
    }
}