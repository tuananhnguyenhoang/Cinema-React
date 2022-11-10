import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {SERVER} from  '../../Common/ApiMain'
async function movieAPI(CinemaId,keyId,dateApi) {
    var res = await fetch(`${SERVER}cinema/branch/schedule?apiCinemaId=${CinemaId}&cineplex=${keyId}&date=${dateApi}`)
    var dataMovie = await res.json()
    return dataMovie
}
export default function* getMovie({ payload }) {
    var lsGetMOvie = yield call(movieAPI, payload.CinemaId,payload.keyId,payload.dateApi)
    console.log(lsGetMOvie)
    yield put({ type: "GetMovie", payload: lsGetMOvie })
}