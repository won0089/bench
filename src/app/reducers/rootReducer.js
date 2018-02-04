import { combineReducers } from 'redux';
import transaction from './transactionReducer';

const rootReducer = combineReducers({
    transaction
});

export default rootReducer;