const Utils = require('utils.js')

const sendPaymentRequestToApi = (totalAmount, totalShopping) =>{
    const amount = Utils.calculateNumber('SUM', totalAmount, totalShopping)
    console.log(`The total is: ${amount}`)
}

module.exports = sendPaymentRequestToApi;