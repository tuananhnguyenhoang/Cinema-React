import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SERVER } from '../../Common/ApiMain'

async function DetaildateAPI(Cineplex,day, idFilm) {
    // console.log(Cineplex,day, idFilm);
    var res = await fetch(`${SERVER}movie/schedule?apiFilmId=${idFilm}&date=${day}&cineplex=${Cineplex}`)
    var datadayselect = await res.json()
    return datadayselect
}
export default function* getSelectMovie({ payload }) {
    console.log(payload);
    var lsdayselect = yield call(DetaildateAPI,payload.cinePlex, payload.day, payload.idFilm)
    yield put({
        type: "GetDataDaySelected", payload: {
            lsselect: lsdayselect,
        }
    })
    // console.log(lsdayselect);
}
