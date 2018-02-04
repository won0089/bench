import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { initialState as transactionState } from '../reducers/transactionReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const defaultState = {
    transaction: transactionState
};

export default function configureStore(initialState = defaultState) {
    return createStore(
        rootReducer,
        defaultState,
        composeWithDevTools(applyMiddleware(thunk))
    );
};
