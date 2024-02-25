//process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;    // remove this before production

import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_cU0QovPkzRwR1dM2duTpxE3aVLUDndO55cqBwP9t');

export async function convertCurrency(fromCurrency, toCurrency, units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const multiplier = res.data[toCurrency];
    return multiplier*units;
};

// freecurrencyapi.latest({
//     base_currency: 'USD',       // Converting 1 USD to INR
//     currencies: 'INR'
// }).then(response => {
//     console.log(response);
// });