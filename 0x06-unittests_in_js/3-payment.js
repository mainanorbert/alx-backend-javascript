const Utils = require('utils.js')

const sendPaymentRequestToApi = (totalAmount, totalShipping) =>{
    const amount = Utils.calculateNumber('SUM', totalAmount, totalShipping)
    console.log(`The total is: ${amount}`)
}

module.exports = sendPaymentRequestToApi;