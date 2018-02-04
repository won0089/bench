import { combineReducers } from 'redux';
import transaction from './transactionReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
    transaction,
    error
});

export default rootReducer;