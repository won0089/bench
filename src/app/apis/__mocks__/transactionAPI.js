export const mockTransactions = [{
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

const mockResponse = {
    page: 1,
    totalCount: 4,
    transactions: mockTransactions
};

export default class transactionAPI {
    static async getTransactions(page = 1) {
        return await mockResponse;
    }
}