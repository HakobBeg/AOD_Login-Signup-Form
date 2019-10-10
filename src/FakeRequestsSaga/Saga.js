import { put, takeEvery, all } from 'redux-saga/effects'
import { loginActionAsync, registerActionAsync } from "../Constants";
import { turnLoaderOff, turnLoaderOn } from "../Redux/ActionCreators";



const loginRequestRunningTime = (ms) => new Promise(res => setTimeout(res, ms));


export function* loginRequest() {
    yield put(turnLoaderOn());
    yield loginRequestRunningTime(2000).then(()=>{
        throw new Error("Can't connect with server, something was went wrong. Please try again later");
        }).catch((err)=>{alert(err)});
    yield put(turnLoaderOff());

}


export function* watchLoginrequest() {
    yield takeEvery(loginActionAsync, loginRequest)
}


export function* registerRequest() {
    yield put(turnLoaderOn());
    yield loginRequestRunningTime(2000).then(()=>{
        throw new Error("Can't connect with server, something was went wrong. Please try again later");
    }).catch((err)=>{alert(err)});
    yield put(turnLoaderOff());
}


export function* watchRegisterrequest() {
    yield takeEvery(registerActionAsync, registerRequest)
}




export  function* rootSaga() {
    yield all([
        watchLoginrequest(),
        watchRegisterrequest()
    ])
}