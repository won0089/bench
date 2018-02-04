import config from '../../../app.config';

export default class transactionAPI {
    static async getTransactions(page = 1) {
        const response = await fetch(`${config.transactionApiUrl}/${page}.json`);
        return await response.json();
    }
}