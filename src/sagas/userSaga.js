import { all, fork, put, takeLatest } from "redux-saga/effects";



function* createUser({ payload, meta }) {
        yield put({ type: 'CREATE_USER_SUCCESS', payload: {id: new Date().valueOf(), ...payload}})
        meta.resetForm();
        
}


function* createUserRequest() {
    yield takeLatest("CREATE_USER_REQUEST", createUser)
}

export default function* userSaga() {
    yield all([fork(createUserRequest)])
}