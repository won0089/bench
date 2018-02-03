import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const defaultState = {};

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState || defaultState,
        applyMiddleware(thunk)
    );
};

export { defaultState };