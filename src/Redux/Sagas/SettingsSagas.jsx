import { put, takeEvery } from "redux-saga/effects"

import { CREATE_SETTINGS, CREATE_SETTINGS_RED, DELETE_SETTINGS, DELETE_SETTINGS_RED, GET_SETTINGS, GET_SETTINGS_RED, UPDATE_SETTINGS, UPDATE_SETTINGS_RED } from "../Constants"

import {createRecord, deleteRecord, getRecord, updateRecord} from "./Services/index"
// import { createMultipartRecord,deleteRecord, getRecord, updateMultipartRecord } from "./services/index"

function* createSaga(action) {                                                     //worker saga
    // let response = yield createMulti partRecord("settings", action.payload)  //Used this line in case when file field is used
    let response = yield createRecord("settings", action.payload)              //Used this line in case when no file field is used
    yield put({ type: CREATE_SETTINGS_RED, payload: response })
}

function* getSaga() {                                             //worker saga
    let response = yield getRecord("settings")
    yield put({ type: GET_SETTINGS_RED, payload: response })
}


function* updateSaga(action) { 
                                                    //worker saga
    yield updateRecord("settings", action.payload)                                //Used this line in case when no field is used
    yield put({ type: UPDATE_SETTINGS_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("settings", action.payload)   //Used this line in case when field is used
    // yield put({ type: UPDATE_SETTINGS_RED, payload: response})
}


function* deleteSaga(action) {                                                        //worker saga
    yield deleteRecord("settings", action.payload)    
    yield put({ type: DELETE_SETTINGS_RED, payload: action.payload })

}

export default function* SettingsSagas() {
    yield takeEvery(CREATE_SETTINGS, createSaga)                                      //watcher Saga
    yield takeEvery(GET_SETTINGS, getSaga)                                            //watcher Saga
    yield takeEvery(UPDATE_SETTINGS, updateSaga)                                      //watcher Saga
    yield takeEvery(DELETE_SETTINGS, deleteSaga)                                      //watcher Saga
}