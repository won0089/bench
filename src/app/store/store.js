import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const defaultState = {
    transactions: []
};

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        defaultState,
        composeWithDevTools(applyMiddleware(thunk))
    );
};
