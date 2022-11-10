import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SERVER } from '../../Common/ApiMain'


async function PaymentAPI(pay) {
    var res = await fetch(`${SERVER}user/payment`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(pay.pay)
        }
    )
    console.log(res.status)

    var status = res.status;
    return {status}
}

export default function* getPaymentAPI({ type, payload }) {
    var lsPaymentAPI = yield call(PaymentAPI, payload)
    yield put({ type: "GetPaymentAPI", payload: lsPaymentAPI })
}