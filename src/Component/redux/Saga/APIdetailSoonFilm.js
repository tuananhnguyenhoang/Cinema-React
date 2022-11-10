import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SERVER } from '../../Common/ApiMain'

async function DetailSoonAPI(IDfilm) {
    var res = await fetch(`${SERVER}movie/detail?apiFilmId=${IDfilm}`)
    var dataSoonFilm = await res.json()
    return dataSoonFilm
}
export default function* getDetailSoonMovie({ payload }) {
    var detailSoonMovie = yield call(DetailSoonAPI, payload)
    yield put({
        type: "GetSoondetailMovie", payload: detailSoonMovie
    })
}