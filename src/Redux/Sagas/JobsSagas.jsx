import { put, takeEvery } from "redux-saga/effects"

import { CREATE_JOBS, CREATE_JOBS_RED, DELETE_JOBS, DELETE_JOBS_RED, GET_JOBS, GET_JOBS_RED, UPDATE_JOBS, UPDATE_JOBS_RED } from "../Constants"

import {createRecord, deleteRecord, getRecord, updateRecord} from "./Services/index"
// import { createMultipartRecord,deleteRecord, getRecord, updateMultipartRecord } from "./services/index"

function* createSaga(action) {                                                     //worker saga
    // let response = yield createMulti partRecord("jobs", action.payload)  //Used this line in case when file field is used
    let response = yield createRecord("jobs", action.payload)              //Used this line in case when no file field is used
    yield put({ type: CREATE_JOBS_RED, payload: response })
}

function* getSaga() {                                             //worker saga
    let response = yield getRecord("jobs")
    yield put({ type: GET_JOBS_RED, payload: response })
}


function* updateSaga(action) { 
                                                    //worker saga
    yield updateRecord("jobs", action.payload)                                //Used this line in case when no field is used
    yield put({ type: UPDATE_JOBS_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("jobs", action.payload)   //Used this line in case when field is used
    // yield put({ type: UPDATE_JOBS_RED, payload: response})
}


function* deleteSaga(action) {                                                        //worker saga
    yield deleteRecord("jobs", action.payload)    
    yield put({ type: DELETE_JOBS_RED, payload: action.payload })

}

export default function* JobsSagas() {
    yield takeEvery(CREATE_JOBS, createSaga)                                      //watcher Saga
    yield takeEvery(GET_JOBS, getSaga)                                            //watcher Saga
    yield takeEvery(UPDATE_JOBS, updateSaga)                                      //watcher Saga
    yield takeEvery(DELETE_JOBS, deleteSaga)                                      //watcher Saga
}