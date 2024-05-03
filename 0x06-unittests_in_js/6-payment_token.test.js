const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('returns resolved promise with the correct data when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                assert.deepStrictEqual(response, { data: 'Successful response from the API' });
                done();
            })
            .catch((err) => {
                done(err);
            });
    });
});
