import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SERVER } from '../../Common/ApiMain'

async function DetailAPI(IDfilm) {
    var res = await fetch(`${SERVER}movie/detail?apiFilmId=${IDfilm}`)
    var dataFilm = await res.json()
    return dataFilm
}
async function DetailCommentAPI(IDfilm) {
    var res = await fetch(`${SERVER}movie/comment?apiFilmId=${IDfilm}`)
    var datacommentFilm = await res.json()
    return datacommentFilm
}
async function DetaildateAPI(IDfilm, date) {
    var res = await fetch(`${SERVER}movie/schedule?apiFilmId=${IDfilm}&date=${date}&cineplex=6`)
    var datadetailFilm = await res.json()
    return datadetailFilm
}
export default function* getDetailMovie({ payload }) {
    
    var lsdetailMovie = yield call(DetailAPI, payload[0])
    var lsdetailCommentMovie = yield call(DetailCommentAPI, payload[0])
    var lsdetaildateMovie = yield call(DetaildateAPI, payload[0], payload[1])
    yield put({
        type: "GetDatadetailMovie", payload: {
            lsdetailMovie: lsdetailMovie,
            lsdetaildateMovie: lsdetaildateMovie,
            lsdetailCommentMovie: lsdetailCommentMovie
        }
    })
}