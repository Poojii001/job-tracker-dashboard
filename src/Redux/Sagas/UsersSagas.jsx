import { put, takeEvery } from "redux-saga/effects"

import { CREATE_USERS, CREATE_USERS_RED, DELETE_USERS, DELETE_USERS_RED, GET_USERS, GET_USERS_RED, UPDATE_USERS, UPDATE_USERS_RED } from "../Constants"

import {createRecord, deleteRecord, getRecord, updateRecord} from "./Services/index"
// import { createMultipartRecord,deleteRecord, getRecord, updateMultipartRecord } from "./services/index"

function* createSaga(action) {                                                     //worker saga
    // let response = yield createMulti partRecord("users", action.payload)  //Used this line in case when file field is used
    let response = yield createRecord("users", action.payload)              //Used this line in case when no file field is used
    yield put({ type: CREATE_USERS_RED, payload: response })
}

function* getSaga() {                                             //worker saga
    let response = yield getRecord("users")
    yield put({ type: GET_USERS_RED, payload: response })
}


function* updateSaga(action) { 
                                                    //worker saga
    yield updateRecord("users", action.payload)                                //Used this line in case when no field is used
    yield put({ type: UPDATE_USERS_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("users", action.payload)   //Used this line in case when field is used
    // yield put({ type: UPDATE_USERS_RED, payload: response})
}


function* deleteSaga(action) {                                                        //worker saga
    yield deleteRecord("users", action.payload)    
    yield put({ type: DELETE_USERS_RED, payload: action.payload })

}

export default function* UsersSagas() {
    yield takeEvery(CREATE_USERS, createSaga)                                      //watcher Saga
    yield takeEvery(GET_USERS, getSaga)                                            //watcher Saga
    yield takeEvery(UPDATE_USERS, updateSaga)                                      //watcher Saga
    yield takeEvery(DELETE_USERS, deleteSaga)                                      //watcher Saga
}