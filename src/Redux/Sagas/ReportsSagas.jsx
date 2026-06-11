import { put, takeEvery } from "redux-saga/effects"

import { CREATE_REPORTS, CREATE_REPORTS_RED, DELETE_REPORTS, DELETE_REPORTS_RED, GET_REPORTS, GET_REPORTS_RED, UPDATE_REPORTS, UPDATE_REPORTS_RED } from "../Constants"

import {createRecord, deleteRecord, getRecord, updateRecord} from "./Services/index"
// import { createMultipartRecord,deleteRecord, getRecord, updateMultipartRecord } from "./services/index"

function* createSaga(action) {                                                     //worker saga
    // let response = yield createMulti partRecord("reports", action.payload)  //Used this line in case when file field is used
    let response = yield createRecord("reports", action.payload)              //Used this line in case when no file field is used
    yield put({ type: CREATE_REPORTS_RED, payload: response })
}

function* getSaga() {                                             //worker saga
    let response = yield getRecord("reports")
    yield put({ type: GET_REPORTS_RED, payload: response })
}


function* updateSaga(action) { 
                                                    //worker saga
    yield updateRecord("reports", action.payload)                                //Used this line in case when no field is used
    yield put({ type: UPDATE_REPORTS_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("reports", action.payload)   //Used this line in case when field is used
    // yield put({ type: UPDATE_REPORTS_RED, payload: response})
}


function* deleteSaga(action) {                                                        //worker saga
    yield deleteRecord("reports", action.payload)    
    yield put({ type: DELETE_REPORTS_RED, payload: action.payload })

}

export default function* ReportsSagas() {
    yield takeEvery(CREATE_REPORTS, createSaga)                                      //watcher Saga
    yield takeEvery(GET_REPORTS, getSaga)                                            //watcher Saga
    yield takeEvery(UPDATE_REPORTS, updateSaga)                                      //watcher Saga
    yield takeEvery(DELETE_REPORTS, deleteSaga)                                      //watcher Saga
}