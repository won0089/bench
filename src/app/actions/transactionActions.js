import transactionAPI from '../apis/transactionAPI';
import { transactionActionTypes as types } from './actionTypes';

export function getTransactions() {
    return async (dispatch) => {
        try {
            dispatch(fetchTransactions());

            const firstPage = await transactionAPI.getTransactions(1);
            dispatch(fetchTransactionsSuccess(firstPage.transactions));

            // first page contains total number of transactions
            const totalPages = Math.round(firstPage.totalCount / 10);
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
            dispatch(fetchTransactionsFail());
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

export function fetchTransactionsFail() {
    return {
        type: types.fetchTransactionsFail
    };
}