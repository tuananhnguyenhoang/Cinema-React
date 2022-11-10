import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {SERVER} from  '../../Common/ApiMain'
async function cineplexAPI(keyId) {
    var res = await fetch(`${SERVER}cinema/branch?cineplex=${keyId}&lastIndex=0&count=100`)
    var dataCineplex = await res.json()
    console.log(dataCineplex)
    return dataCineplex
}
export default function* getcineplex({ payload }) {
    var lsGetcineplex = yield call(cineplexAPI, payload)
    yield put({ type: "GetCineplex", payload: lsGetcineplex })
}