import { put, takeEvery } from "redux-saga/effects"

import { 
    CREATE_NOTIFICATIONS, CREATE_NOTIFICATIONS_RED, 
    DELETE_NOTIFICATIONS, DELETE_NOTIFICATIONS_RED, 
    GET_NOTIFICATIONS, GET_NOTIFICATIONS_RED, 
    UPDATE_NOTIFICATIONS, UPDATE_NOTIFICATIONS_RED,
    MARK_READ, MARK_READ_RED              // ✅ new constants
} from "../Constants"

import { createRecord, deleteRecord, getRecord, updateRecord } from "./Services/index"
// import { createMultipartRecord, deleteRecord, getRecord, updateMultipartRecord } from "./services/index"

// Create
function* createSaga(action) {
    let response = yield createRecord("notifications", action.payload)
    yield put({ type: CREATE_NOTIFICATIONS_RED, payload: response })
}

// Get
function* getSaga() {
    let response = yield getRecord("notifications")
    yield put({ type: GET_NOTIFICATIONS_RED, payload: response })
}

// Update
function* updateSaga(action) {
    yield updateRecord("notifications", action.payload)
    yield put({ type: UPDATE_NOTIFICATIONS_RED, payload: action.payload })
}

// Delete
function* deleteSaga(action) {
    yield deleteRecord("notifications", action.payload)
    yield put({ type: DELETE_NOTIFICATIONS_RED, payload: action.payload })
}

// ✅ Mark Read
function* markReadSaga(action) {
    yield updateRecord("notifications", { id: action.payload, status: "Read" })
    yield put({ type: MARK_READ_RED, payload: action.payload })
}

export default function* NotificationsSagas() {
    yield takeEvery(CREATE_NOTIFICATIONS, createSaga)
    yield takeEvery(GET_NOTIFICATIONS, getSaga)
    yield takeEvery(UPDATE_NOTIFICATIONS, updateSaga)
    yield takeEvery(DELETE_NOTIFICATIONS, deleteSaga)
    yield takeEvery(MARK_READ, markReadSaga)   // ✅ new watcher saga
}
