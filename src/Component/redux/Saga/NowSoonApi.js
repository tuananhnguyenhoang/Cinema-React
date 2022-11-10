import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
async function NowSoonAPI() {
    var res = await fetch('http://localhost:3003/movie')
    var dataNowSoon = await res.json()
    return dataNowSoon
}
export default function* getNowSoon({ payload }) {
    var lsGetNowSoon = yield call(NowSoonAPI, payload)
    yield put({ type: "GetNowSoonMovie", payload: lsGetNowSoon })
}