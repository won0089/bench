import config from '../../../app.config';

export default class transactionAPI {
    static async getTransactions() {
        const response = await fetch(`${config.transactionApiUrl}/1.json`);
        return await response.json();
    }
}