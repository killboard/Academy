const ds = () => {}

// Handled by aggregator repository
const collections = [
    "company.antifraud_aggregator.transactions_qr_code"
]

payload_metadata = [{
    yyyy_mm_dd_hh_mm_ss: "2020|04|25|19|33|32",
    latitude_longitude: "-22.9377794|-47.0303715",
    user_agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36 OPR/67.0.3575.137",
    origin: "https://www.site.com.br",
}]

date = "2020-10-25T14:30:35"

[
    {
        "customer_reference": "5665cb89-3392-4dd9-b1d1-9e6eb0fbd34b",
        "year_month_day_hh_mm_ss": "2020|04|25|14|01|00",
        "epoch_time":  1603645260,
        "merchant_reference": "740f66b7-862a-4664-a704-704fcc275fa9",
        "payment_id": "bfe26f5a-5f0d-42b7-8a09-a5d1cb968c0e",
        "card_id": "f669a783-8c2f-4ff0-bdc9-ea343283d8cd",
        "card_id_merchant_reference": "f669a783-8c2f-4ff0-bdc9-ea343283d8cd|740f66b7-862a-4664-a704-704fcc275fa9",
        "band": "VISA",
        "payment_status": "AUTHORIZED",
        "card_ammount": 3000,
        "wallet_ammount": 3000,
        "total_ammount": 6000,
        "ttl": 1603645200
    },
]