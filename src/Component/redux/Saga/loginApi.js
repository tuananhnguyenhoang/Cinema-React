import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SERVER } from '../../Common/ApiMain'


async function UserLoginUpdateAPI(acc) {

    // console.log(payload)
    var res = await fetch(`${SERVER}user/login`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(acc)
        }
    )
    var status = res.status;
    return { acc, status }
}

export default function* getLoginUpdateDataUser({ type, payload }) {
    var lsUserLoginAPI = yield call(UserLoginUpdateAPI, payload.acc)
    yield put({ type: "GetLoginUser", payload: lsUserLoginAPI })

}