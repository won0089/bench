import { shallow } from 'enzyme';
import * as React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import Table from '../';

describe('<Table /> tests', () => {

    const testTransactions = [{
        Date: "2013-12-17",
        Ledger: "",
        Amount: "1.00",
        Company: "PAYMENT RECEIVED - THANK YOU"
    }, {
        Date: "2013-12-17",
        Ledger: "Auto Expense",
        Amount: "2.00",
        Company: "SMART CITY FOODS xxxxxx3663 BC"
    }
    ];

    const testTotalAmount = '$0.00';


    it('should render TableHeader and TableRow', () => {
        const wrapper = shallow(<Table totalAmount={testTotalAmount} transactions={testTransactions}/>);
        expect(wrapper.find(TableHeader).length).toEqual(1);
        expect(wrapper.find(TableRow).length).toEqual(2);
    });

    it('should render loading icon', () => {
        const wrapper = shallow(<Table totalAmount={testTotalAmount} transactions={testTransactions} isLoading={true}/>);
        expect(wrapper.find(CircularProgress).length).toEqual(1);
    });
});