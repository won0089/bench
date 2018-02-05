import { shallow, mount } from 'enzyme';
import * as React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Table from '../../Table';
import BenchPage from '../';

describe('<BenchPage /> tests', () => {
    const mockStore = configureStore([thunk]);
    const mockState = {
        transactions: [],
        totalAmount: 0,
        isLoading: false
    };
    const mockStransactions = [{
        Date: "2013-12-17",
        Ledger: "",
        Amount: "1.00",
        Company: "PAYMENT RECEIVED - THANK YOU"
    }, {
        Date: "2013-12-21",
        Ledger: "Auto Expense",
        Amount: "-2123.43",
        Company: "SMART CITY FOODS xxxxxx3663 BC"
    }
    ];
    const mockTotalAmount = 12;
    const mockGetTransactions = jest.fn();

    it('should render Table element and should display props in correct format', () => {
        const state = Object.assign({}, mockState,
            { transactions: mockStransactions, totalAmount: mockTotalAmount });
        const expectedTotalAmount = '$12.00';
        const expectedAmounts = ['$1.00', '-$2,123.43'];
        const expectedDates = ['Dec 17th, 2013', 'Dec 21st, 2013'];
        const wrapper = mount(<BenchPage store={mockStore({ transaction: state })} />);

        expect(wrapper.find(Table).length).toEqual(1);
        expect(wrapper.find(Table).props().totalAmount).toEqual(expectedTotalAmount);
        wrapper.find(Table).props().transactions.forEach((transaction, idx) => {
            expect(transaction.date).toEqual(expectedDates[idx]);
            expect(transaction.amount).toEqual(expectedAmounts[idx]);
        });
    });
});