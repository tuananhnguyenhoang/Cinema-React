import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SERVER } from '../../Common/ApiMain'

async function cinemaAPI(FilmID, DateApiMovie) {
    var res = await fetch(`${SERVER}movie/schedule?apiFilmId=${FilmID}&date=${DateApiMovie}`)
    var dataMovieToCinema = await res.json()
    return dataMovieToCinema
}
export default function* getdataMovieToCinema({ payload }) {
    var lsGetdataMovieToCinema = yield call(cinemaAPI, payload.FilmID, payload.DateApiMovie)
    yield put({ type: "GetdataMovieToCinema", payload: lsGetdataMovieToCinema })
}