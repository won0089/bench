import moment from 'moment';

// factory to return appropriate formmater for given type
const formatterType = {
    date(dateString) {
        return moment(dateString).format('MMM Do, YYYY');
    },
    currency(currency) {
        // convert to string for formatting
        const currencyStr = typeof (currency) === 'string' ? currency : currency.toString();
        const isNegative = -currencyStr ? true : false;
        const formattedCurrency = Math.abs(currencyStr).toFixed(2);
        const [dollarPortion, centPortion] = formattedCurrency.split('.');

        return `${isNegative && '-'}$${dollarPortionFormatter(dollarPortion)}.${centPortion}`;
    }
}

/**
 * method to format dollar strings to comma delimited dollar strings
 * ie. 10000 => 10,000
 **/
function dollarPortionFormatter(dollar) {
    const dollarLength = dollar.length;
    // if dollor amount is under 3 digits no need to add commas
    if (dollarLength <= 3) {
        return dollar;
    }
    // location of where the first comma will be
    let delimiterLocation = (dollar.length % 3) - 1;

    return dollar.split('').map((digit, idx) => {
        let formattedDigit = digit;
        // if at location where comma should be placed, add comma
        // and increment next comma position
        if (idx === delimiterLocation && idx !== dollarLength - 1) {
            formattedDigit = formattedDigit + ',';
            delimiterLocation = delimiterLocation + 3;
        }
        return formattedDigit;
    }).join('');
}

export default function formatter(type) {
    const format = formatterType[type];

    return function (item) {
        // if formatter doesn't exist return unformatted item
        return format ? format(item) : item;
    }
}