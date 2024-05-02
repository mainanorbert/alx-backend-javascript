// const { expect } = require('chai');
// const sinon = require('sinon');
// const Utils = require('./utils');
// const sendPaymentRequestToApi = require('./3-payment');

// describe('sendPaymentRequestToApi', () => {
//     it('testing 2 function for similar output', () => {
//         const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
//         const consoleSpy = sinon.spy(console, 'log');
//         sendPaymentRequestToApi(100, 20);
//         expect(calculateNumberSpy.calledOnce).to.be.true;
//         expect(calculateNumberSpy.calledWith(100, 20, 'SUM')).to.be.true;
//         expect(consoleSpy.calledOnce).to.be.true;
//         expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
//         calculateNumberSpy.restore();
//         consoleSpy.restore();

//     })
// })

const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberSpy;

    beforeEach(() => {
        calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(() => {
        calculateNumberSpy.restore();
    });

    it('should call Utils.calculateNumber with correct arguments and log the result', () => {
        const totalAmount = 100;
        const totalShipping = 20;

        sendPaymentRequestToApi(totalAmount, totalShipping);

        assert(calculateNumberSpy.calledOnceWithExactly('SUM', totalAmount, totalShipping));
    });
});