import { errorActionTypes as types } from "../actions/actionTypes";

export const initialState = {
    message: ''
}

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case types.errorOccured:
            return Object.assign({}, state, { message: action.message });

        case types.clear:
            return initialState;

        default:
            return state;
    }
}