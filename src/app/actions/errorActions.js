import { errorActionTypes as types } from './actionTypes';

export function errorOccured(error) {
    return {
        type: types.errorOccured,
        message: error.message,
        code: error.code
    };
}

export function clearError() {
    return {
        type: types.clear
    };
}
