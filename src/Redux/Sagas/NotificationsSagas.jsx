import { put, takeEvery } from "redux-saga/effects"

import { CREATE_NOTIFICATIONS, CREATE_NOTIFICATIONS_RED, DELETE_NOTIFICATIONS, DELETE_NOTIFICATIONS_RED, GET_NOTIFICATIONS, GET_NOTIFICATIONS_RED, UPDATE_NOTIFICATIONS, UPDATE_NOTIFICATIONS_RED } from "../Constants"

import {createRecord, deleteRecord, getRecord, updateRecord} from "./Services/index"
// import { createMultipartRecord,deleteRecord, getRecord, updateMultipartRecord } from "./services/index"

function* createSaga(action) {                                                     //worker saga
    // let response = yield createMulti partRecord("notifications", action.payload)  //Used this line in case when file field is used
    let response = yield createRecord("notifications", action.payload)              //Used this line in case when no file field is used
    yield put({ type: CREATE_NOTIFICATIONS_RED, payload: response })
}

function* getSaga() {                                             //worker saga
    let response = yield getRecord("notifications")
    yield put({ type: GET_NOTIFICATIONS_RED, payload: response })
}


function* updateSaga(action) { 
                                                    //worker saga
    yield updateRecord("notifications", action.payload)                                //Used this line in case when no field is used
    yield put({ type: UPDATE_NOTIFICATIONS_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("notifications", action.payload)   //Used this line in case when field is used
    // yield put({ type: UPDATE_NOTIFICATIONS_RED, payload: response})
}


function* deleteSaga(action) {                                                        //worker saga
    yield deleteRecord("notifications", action.payload)    
    yield put({ type: DELETE_NOTIFICATIONS_RED, payload: action.payload })

}

export default function* NotificationsSagas() {
    yield takeEvery(CREATE_NOTIFICATIONS, createSaga)                                      //watcher Saga
    yield takeEvery(GET_NOTIFICATIONS, getSaga)                                            //watcher Saga
    yield takeEvery(UPDATE_NOTIFICATIONS, updateSaga)                                      //watcher Saga
    yield takeEvery(DELETE_NOTIFICATIONS, deleteSaga)                                      //watcher Saga
}