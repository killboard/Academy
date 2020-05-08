const faker = require('faker');
const moment = require('moment');

module.exports = {
    getRandomItem: getRandomItem
}

function getRandomItem() {
    const walletAmount = faker.finance.amount()
    const cardAmount = faker.finance.amount()
    const totalAmount = walletAmount + cardAmount
    const paymentStatus = faker.random.arrayElement(['AUTHORIZED', 'NOT_AUTHORIZED'])
    const paymentId = faker.random.uuid()
    const date = moment(faker.date.between('2020-04-08', '2020-05-08'));
    const epochTime = date.unix()
    const yearMonthDay = `${date.year()}|${date.month()}|${date.dayOfYear()}|${date.hour()}|${date.minute()}|${date.second()}`

    return {
        "customer_reference": "5665cb89-3392-4dd9-b1d1-9e6eb0fbd34b",
        "year_month_day_hh_mm_ss": yearMonthDay,
        "epoch_time": epochTime,
        "merchant_reference": "740f66b7-862a-4664-a704-704fcc275fa9",
        "payment_id": paymentId,
        "card_id": "f669a783-8c2f-4ff0-bdc9-ea343283d8cd",
        "card_id_merchant_reference": "f669a783-8c2f-4ff0-bdc9-ea343283d8cd|740f66b7-862a-4664-a704-704fcc275fa9",
        "band": "VISA",
        "payment_status": paymentStatus,
        "card_ammount": cardAmount,
        "wallet_ammount": walletAmount,
        "total_ammount": totalAmount,
        "ttl": 1603645200
    }
}