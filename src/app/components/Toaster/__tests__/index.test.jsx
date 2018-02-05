import { shallow } from 'enzyme';
import * as React from 'react';
import configureStore from 'redux-mock-store';
import Snackbar from 'material-ui/Snackbar';
import Toaster from '../index';

describe('<Toaster /> tests', () => {
    const mockStore = configureStore();

    it('should render Snackbar element and it should be visible', () => {
        const wrapper = shallow(<Toaster store={mockStore({ error: { message: 'test' } })} />);
        expect(wrapper.dive(Toaster).find(Snackbar).length).toEqual(1);
        expect(wrapper.dive(Toaster).find(Snackbar).props().open).toEqual(true);
    });

    it('Snackbar element should not be visible', () => {
        const wrapper = shallow(<Toaster store={mockStore({ error: { message: '' } })} />);
        expect(wrapper.dive(Toaster).find(Snackbar).props().open).toEqual(false);
    });
});