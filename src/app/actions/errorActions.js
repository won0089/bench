import { errorActionTypes as types } from './actionTypes';

export function errorOccured(error) {
    return async (dispatch) => {
        dispatch({
            type: types.errorOccured,
            message: error.message
        });
}
}
