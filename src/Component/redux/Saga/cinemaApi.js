import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {SERVER} from  '../../Common/ApiMain'

async function cinemaAPI() {
    var res = await fetch(`${SERVER}cinema`)
    var dataCinema = await res.json()
    return dataCinema
}
export default function* getCinema({ payload }) {
    var lsGetCinema = yield call(cinemaAPI, payload)
    yield put({ type: "GetCinema", payload: lsGetCinema })
}