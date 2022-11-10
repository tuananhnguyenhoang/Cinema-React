import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SERVER } from '../../Common/ApiMain'

async function DetailCineAPI(Cineplex,day, idFilm) {
    // console.log(Cineplex,day, idFilm);
    var res = await fetch(`${SERVER}movie/schedule?apiFilmId=${idFilm}&date=${day}&cineplex=${Cineplex}`)
    var dataselect = await res.json()
    // console.log(dataselect);
    return dataselect
}
export default function* getSelectCine({ payload }) {
    var lsselect = yield call(DetailCineAPI,payload.cinePlex, payload.day, payload.idFilm)
    console.log(payload);
    yield put({
        type: "GetDataCineSelected", payload: {
            lsselect: lsselect,
        }
    })
}