import formatter from '../formatter';

describe('formatter tests', () => {
    const currencyFormatter = formatter('currency');
    const dateFormatter = formatter('date');
    const invalidFormatter = formatter('invalid');

    it('should convert dates correctly', () => {
        const dateToConvert = '2017-10-10';
        const expectedDate = 'Oct 10th, 2017';

        expect(dateFormatter(dateToConvert)).toEqual(expectedDate);
    });

    it('should convert currency correctly', () => {
        const currenciesToConvert = [1.00, '12', '12345678909654', '-1234.3', -0.234];
        const expectedCurrencies = ['$1.00', '$12.00', '$12,345,678,909,654.00', '-$1,234.30', '-$0.23'];

        currenciesToConvert.forEach((currency, idx) => {
            expect(currencyFormatter(currency)).toEqual(expectedCurrencies[idx]);
        });
    });

    it('should not convert if incorrect formatter was constructed', () => {
        const toConvert = 'test';
        const expected = 'test';

        expect(invalidFormatter(toConvert)).toEqual(expected);
    });
});