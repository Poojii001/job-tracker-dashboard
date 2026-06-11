import { put, takeEvery } from "redux-saga/effects"

import { CREATE_AUDITlOGS, CREATE_AUDITlOGS_RED, DELETE_AUDITlOGS, DELETE_AUDITlOGS_RED, GET_AUDITlOGS, GET_AUDITlOGS_RED, UPDATE_AUDITlOGS, UPDATE_AUDITlOGS_RED } from "../Constants"

import {createRecord, deleteRecord, getRecord, updateRecord} from "./Services/index"
// import { createMultipartRecord,deleteRecord, getRecord, updateMultipartRecord } from "./services/index"

function* createSaga(action) {                                                     //worker saga
    // let response = yield createMulti partRecord("auditlogs", action.payload)  //Used this line in case when file field is used
    let response = yield createRecord("auditlogs", action.payload)              //Used this line in case when no file field is used
    yield put({ type: CREATE_AUDITlOGS_RED, payload: response })
}

function* getSaga() {                                             //worker saga
    let response = yield getRecord("auditlogs")
    yield put({ type: GET_AUDITlOGS_RED, payload: response })
}


function* updateSaga(action) { 
                                                    //worker saga
    yield updateRecord("auditlogs", action.payload)                                //Used this line in case when no field is used
    yield put({ type: UPDATE_AUDITlOGS_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("auditlogs", action.payload)   //Used this line in case when field is used
    // yield put({ type: UPDATE_AUDITlOGS_RED, payload: response})
}


function* deleteSaga(action) {                                                        //worker saga
    yield deleteRecord("auditlogs", action.payload)    
    yield put({ type: DELETE_AUDITlOGS_RED, payload: action.payload })

}

export default function* AuditLogsSagas() {
    yield takeEvery(CREATE_AUDITlOGS, createSaga)                                      //watcher Saga
    yield takeEvery(GET_AUDITlOGS, getSaga)                                            //watcher Saga
    yield takeEvery(UPDATE_AUDITlOGS, updateSaga)                                      //watcher Saga
    yield takeEvery(DELETE_AUDITlOGS, deleteSaga)                                      //watcher Saga
}