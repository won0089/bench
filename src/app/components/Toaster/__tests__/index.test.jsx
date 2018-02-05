import { shallow } from 'enzyme';
import * as React from 'react';
import configureStore from 'redux-mock-store';
import Snackbar from 'material-ui/Snackbar';
import Toaster from '../index';

describe('<Toaster /> tests', () => {
    const mockStore = configureStore();

    it('should render Snackbar element with retry button', () => {
        const wrapper = shallow(<Toaster store={mockStore({ error: { message: 'test' } })} />);
        expect(wrapper.dive(Toaster).find(Snackbar).length).toEqual(1);
        expect(wrapper.dive(Toaster).find(Snackbar).props().open).toEqual(true);
        expect(wrapper.dive(Toaster).find(Snackbar).props().action).toEqual('retry');
    });

    it('Snackbar element should not be visible', () => {
        const wrapper = shallow(<Toaster store={mockStore({ error: { message: '' } })} />);
        expect(wrapper.dive(Toaster).find(Snackbar).props().open).toEqual(false);
    });

    it('should render Snackbar element without retry button', () => {
        const wrapper = shallow(<Toaster store={mockStore({ error: { message: 'test', code: 404 } })} />);
        expect(wrapper.dive(Toaster).find(Snackbar).length).toEqual(1);
        expect(wrapper.dive(Toaster).find(Snackbar).props().open).toEqual(true);
        expect(wrapper.dive(Toaster).find(Snackbar).props().action).toEqual(undefined);
    });
});