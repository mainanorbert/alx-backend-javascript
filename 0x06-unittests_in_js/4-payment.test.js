const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let stubSum;
    let consoleLogSpy;

    beforeEach(() => {
        stubSum = sinon.stubspy(Utils, 'calculateNumber').returns(10);
        consoleLogSpy = sinon.spy(console.log)
    });

    afterEach(() => {
        stubSum.restore();
        consoleLogSpy.restore()
    });

    it('stubbing Utils.calculateNumber and logging the result', () => {
        const totalAmount = 100;
        const totalShipping = 20;

        sendPaymentRequestToApi(totalAmount, totalShipping);

        assert(stubSum.calledOnceWithExactly('SUM', totalAmount, totalShipping));
        assert(consoleLogSpy.calledOnceWithExactly('The total is 10'));
    });
});