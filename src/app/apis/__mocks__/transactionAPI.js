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

export default class transactionAPI {
    static async getTransactions() {
        return await {
            transactions: mockTransactions
        };
    }
}