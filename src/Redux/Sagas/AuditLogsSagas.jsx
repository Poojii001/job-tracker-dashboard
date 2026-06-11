import { put, takeEvery } from "redux-saga/effects"

import { CREATE_AUDITLOGS, CREATE_AUDITLOGS_RED, DELETE_AUDITLOGS, DELETE_AUDITLOGS_RED, GET_AUDITLOGS, GET_AUDITLOGS_RED, UPDATE_AUDITLOGS, UPDATE_AUDITLOGS_RED } from "../Constants"

import {createRecord, deleteRecord, getRecord, updateRecord} from "./Services/index"
// import { createMultipartRecord,deleteRecord, getRecord, updateMultipartRecord } from "./services/index"

function* createSaga(action) {                                                     //worker saga
    // let response = yield createMulti partRecord("auditlogs", action.payload)  //Used this line in case when file field is used
    let response = yield createRecord("auditlogs", action.payload)              //Used this line in case when no file field is used
    yield put({ type: CREATE_AUDITLOGS_RED, payload: response })
}

function* getSaga() {                                             //worker saga
    let response = yield getRecord("auditlogs")
    yield put({ type: GET_AUDITLOGS_RED, payload: response })
}


function* updateSaga(action) { 
                                                    //worker saga
    yield updateRecord("auditlogs", action.payload)                                //Used this line in case when no field is used
    yield put({ type: UPDATE_AUDITLOGS_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("auditlogs", action.payload)   //Used this line in case when field is used
    // yield put({ type: UPDATE_AUDITLOGS_RED, payload: response})
}


function* deleteSaga(action) {                                                        //worker saga
    yield deleteRecord("auditlogs", action.payload)    
    yield put({ type: DELETE_AUDITLOGS_RED, payload: action.payload })

}

export default function* AuditLogsSagas() {
    yield takeEvery(CREATE_AUDITLOGS, createSaga)                                      //watcher Saga
    yield takeEvery(GET_AUDITLOGS, getSaga)                                            //watcher Saga
    yield takeEvery(UPDATE_AUDITLOGS, updateSaga)                                      //watcher Saga
    yield takeEvery(DELETE_AUDITLOGS, deleteSaga)                                      //watcher Saga
}