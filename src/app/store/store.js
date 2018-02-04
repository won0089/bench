import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export const defaultState = {
    transactions: []
};

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        defaultState,
        applyMiddleware(thunk)
    );
};
