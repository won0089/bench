import reducer, { initialState } from '../errorReducer';
import { errorActionTypes as types } from '../../actions/actionTypes';

describe('error reducer  tests', () => {

    const testMessage = "test error";

    it('should update messages on ERROR_OCCURED', () => {
        const state = reducer(initialState, {
            type: types.errorOccured,
            message: testMessage
        });

        expect(state.message).toEqual(testMessage);
    });

    it('should clear all messages on CLEAR_ERROR', () => {
        const state = reducer(initialState, {
            type: types.clear
        });

        expect(state.message).toEqual('');
    });
});