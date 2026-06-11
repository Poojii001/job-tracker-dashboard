import { all } from "redux-saga/effects"

import UsersSagas from "./UsersSagas"
import JobsSagas from "./JobsSagas"
import ReportsSagas from "./ReportsSagas"
import CompaniesSagas from "./CompaniesSagas"
import NotificationsSagas from "./NotificationsSagas"
import ApplicationsSagas from "./ApplicationsSagas"
import SettingsSagas from "./SettingsSagas"
import AuditLogsSagas from "./AuditLogsSagas"


export default function* RootSaga(){
    yield all([
        UsersSagas(),
        JobsSagas(),
        ReportsSagas(),
        CompaniesSagas(),
        NotificationsSagas(),
        ApplicationsSagas(),
        SettingsSagas(),
        AuditLogsSagas(),
    ])
}