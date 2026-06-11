import { put, takeEvery } from "redux-saga/effects"

import { CREATE_APPLICATIONS, CREATE_APPLICATIONS_RED, DELETE_APPLICATIONS, DELETE_APPLICATIONS_RED, GET_APPLICATIONS, GET_APPLICATIONS_RED, UPDATE_APPLICATIONS, UPDATE_APPLICATIONS_RED } from "../Constants"

import {createRecord, deleteRecord, getRecord, updateRecord} from "./Services/index"
// import { createMultipartRecord,deleteRecord, getRecord, updateMultipartRecord } from "./services/index"

function* createSaga(action) {                                                     //worker saga
    // let response = yield createMulti partRecord("applications", action.payload)  //Used this line in case when file field is used
    let response = yield createRecord("applications", action.payload)              //Used this line in case when no file field is used
    yield put({ type: CREATE_APPLICATIONS_RED, payload: response })
}

function* getSaga() {                                             //worker saga
    let response = yield getRecord("applications")
    yield put({ type: GET_APPLICATIONS_RED, payload: response })
}


function* updateSaga(action) { 
                                                    //worker saga
    yield updateRecord("applications", action.payload)                                //Used this line in case when no field is used
    yield put({ type: UPDATE_APPLICATIONS_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("applications", action.payload)   //Used this line in case when field is used
    // yield put({ type: UPDATE_APPLICATIONS_RED, payload: response})
}


function* deleteSaga(action) {                                                        //worker saga
    yield deleteRecord("applications", action.payload)    
    yield put({ type: DELETE_APPLICATIONS_RED, payload: action.payload })

}

export default function* ApplicationsSagas() {
    yield takeEvery(CREATE_APPLICATIONS, createSaga)                                      //watcher Saga
    yield takeEvery(GET_APPLICATIONS, getSaga)                                            //watcher Saga
    yield takeEvery(UPDATE_APPLICATIONS, updateSaga)                                      //watcher Saga
    yield takeEvery(DELETE_APPLICATIONS, deleteSaga)                                      //watcher Saga
}