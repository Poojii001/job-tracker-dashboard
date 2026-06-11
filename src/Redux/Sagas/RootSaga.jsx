import { all } from "redux-saga/effects"

import UsersSagas from "./UsersSagas"


export default function* RootSaga(){
    yield all([
        UsersSagas(),
    ])
}