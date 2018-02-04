import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { initialState as transactionState } from '../reducers/transactionReducer';
import { initialState as errorState } from '../reducers/errorReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const defaultState = {
    transaction: transactionState,
    error: errorState
};

export default function configureStore(initialState = defaultState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk))
    );
};
