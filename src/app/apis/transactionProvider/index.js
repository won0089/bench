import config from '../../../../app.config';

class transactionAPI {
    static getTransactions() {
        return fetch(`${config.transactionApiUrl}/1.json`);
    }
}