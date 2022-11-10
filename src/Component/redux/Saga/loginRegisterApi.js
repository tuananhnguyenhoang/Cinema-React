import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { SERVER } from '../../Common/ApiMain'


async function UserUpdateAPI(acc) {

    // console.log(payload)
    var res = await fetch(`${SERVER}user/register`,
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

export default function* getUpdateDataUser({ type, payload }) {
    var lsUserAPI = yield call(UserUpdateAPI, payload.acc, payload.sta)
    yield put({ type: "GetRegisterUser", payload: lsUserAPI })
    console.log(lsUserAPI)
    lsUserAPI.status === 200 ? payload.act(true) : payload.act(false)
}