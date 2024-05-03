const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let spySum;

    beforeEach(() => {
        spySum = sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(() => {
        spySum.restore();
    });

    it('Calling Utils.calculateNumber and logging the result', () => {
        const totalAmount = 100;
        const totalShipping = 20;

        sendPaymentRequestToApi(totalAmount, totalShipping);

        assert(spySum.calledOnceWithExactly('SUM', totalAmount, totalShipping));
    });
});