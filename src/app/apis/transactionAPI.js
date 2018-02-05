import config from '../../../app.config';

export default class transactionAPI {
    static async getTransactions(page = 1) {
        const response = await fetch(`${config.transactionApiUrl}/${page}.json`);

        return response.ok ? await response.json() : await Promise.reject(response);
    }
}