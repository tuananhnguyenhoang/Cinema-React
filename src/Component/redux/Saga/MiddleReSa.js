import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import getCinema from './cinemaApi'
import getDetailMovie from './ApiDetailFilm'
import getDetailSoonMovie from './APIdetailSoonFilm'
import getSelectCine from './APIselectcine'
import getSelectMovie from './APIselectday'
import getcineplex from './cineplexApi'
import getLoginUpdateDataUser from './loginApi'
import getUpdateDataUser from './loginRegisterApi'
import getMovie from './MovieApi'
import getdataMovieToCinema from './movieToCinema'
import getNowSoon from './NowSoonApi'
import getPaymentAPI from './PostPaymentApi'
function* mySaga() {
    yield takeEvery("GetCinemaSaga", getCinema)
    yield takeEvery("GetCineplexSaga", getcineplex)
    yield takeEvery("GetMovieSaga",getMovie )
    yield takeEvery("GetRegisterUserSaga",getUpdateDataUser )
    yield takeEvery("GetLoginUserSaga",getLoginUpdateDataUser )
    yield takeEvery("GetNowSoonSaga",getNowSoon )
    yield takeEvery("GetdataMovieToCinemaSaga",getdataMovieToCinema )
    yield takeEvery("GetIdMovieSaga",getDetailMovie )
    yield takeEvery("GetIdMovieSagaSoon",getDetailSoonMovie )
    // yield takeEvery("GetDetailCinePlexSaga",getDetailCineplexMovie )
    yield takeEvery("GetDaySaga",getSelectMovie )
    yield takeEvery("GetCinePlexsagadetail",getSelectCine )
    yield takeEvery("GetPaymentAPISaga",getPaymentAPI )
}
export default mySaga

