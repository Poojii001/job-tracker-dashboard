import { put, takeEvery } from "redux-saga/effects"

import { CREATE_COMPANIES, CREATE_COMPANIES_RED, DELETE_COMPANIES, DELETE_COMPANIES_RED, GET_COMPANIES, GET_COMPANIES_RED, UPDATE_COMPANIES, UPDATE_COMPANIES_RED } from "../Constants"

import {createRecord, deleteRecord, getRecord, updateRecord} from "./Services/index"
// import { createMultipartRecord,deleteRecord, getRecord, updateMultipartRecord } from "./services/index"

function* createSaga(action) {                                                     //worker saga
    // let response = yield createMulti partRecord("companies", action.payload)  //Used this line in case when file field is used
    let response = yield createRecord("companies", action.payload)              //Used this line in case when no file field is used
    yield put({ type: CREATE_COMPANIES_RED, payload: response })
}

function* getSaga() {                                             //worker saga
    let response = yield getRecord("companies")
    yield put({ type: GET_COMPANIES_RED, payload: response })
}


function* updateSaga(action) { 
                                                    //worker saga
    yield updateRecord("companies", action.payload)                                //Used this line in case when no field is used
    yield put({ type: UPDATE_COMPANIES_RED, payload: action.payload })

    // let response = yield updateMultipartRecord("companies", action.payload)   //Used this line in case when field is used
    // yield put({ type: UPDATE_COMPANIES_RED, payload: response})
}


function* deleteSaga(action) {                                                        //worker saga
    yield deleteRecord("companies", action.payload)    
    yield put({ type: DELETE_COMPANIES_RED, payload: action.payload })

}

export default function* CompaniesSagas() {
    yield takeEvery(CREATE_COMPANIES, createSaga)                                      //watcher Saga
    yield takeEvery(GET_COMPANIES, getSaga)                                            //watcher Saga
    yield takeEvery(UPDATE_COMPANIES, updateSaga)                                      //watcher Saga
    yield takeEvery(DELETE_COMPANIES, deleteSaga)                                      //watcher Saga
}