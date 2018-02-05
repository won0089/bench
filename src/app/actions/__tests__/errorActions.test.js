import { errorActionTypes as types } from '../actionTypes';
import * as actions from '../errorActions';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

describe('error action tests', () => {
    const initialState = {
        message: ''
    };

    const mockStore = configureMockStore([thunk]);

    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('should call ERROR_OCCURED', () => {
        const testErrorMessage = 'error';
        store.dispatch(actions.errorOccured(testErrorMessage));
        expect(store.getActions()[0].type).toEqual(types.errorOccured);
    });

    it('should call CLEAR_ERROR', () => {
        store.dispatch(actions.clearError());
        expect(store.getActions()[0].type).toEqual(types.clear);
    });

});
