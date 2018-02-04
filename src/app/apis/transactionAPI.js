import config from '../../../app.config';

export default class transactionAPI {
    static getTransactions() {
        return fetch(`${config.transactionApiUrl}/1.json`);
    }
}