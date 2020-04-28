const ds = () => {}

// Handled by aggregator repository
const collections = [
    "company.antifraud_aggregator.transactions_qr_code",
    "company.antifraud_aggregator.transactions_qr_code_metadata",
    "company.antifraud_aggregator.engine_evaluations",
    "company.antifraud_aggregator.engine_evaluations_range_5mins",
    "company.antifraud_aggregator.transactions_qr_code_range_60mins" (ttl 60 mins),
    "company.antifraud_aggregator.transactions_qr_code_range_10mins" (ttl 10 mins),
    "company.antifraud_aggregator.transactions_qr_code_range_5mins" (ttl 5 mins)
]

payload_metadata = [{
    yyyy_mm_dd_hh_mm_ss: '2020|04|25|19|33|32',
    latitude_longitude: '-22.9377794|-47.0303715',
    user_agent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36 OPR/67.0.3575.137",
    origin: "https://www.site.com.br",
}]

payload = [{
    account_id: '5665cb89-3392-4dd9-b1d1-9e6eb0fbd34b',
    merchant_id: '5665cb89-3392-4dd9-b1d1-9e6eb0fbd34b',
    year_month_day: '2020|04|25',
    transaction_id: '5665cb89-3392-4dd9-b1d1-9e6eb0fbd34b',
    card_fingerprint: 'f669a783-8c2f-4ff0-bdc9-ea343283d8cd',
    band: 'VISA',
    ammount: 3000,
    ttl: 144040
}] 