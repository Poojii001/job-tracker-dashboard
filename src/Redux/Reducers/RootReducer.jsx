import { combineReducers } from "@reduxjs/toolkit";

import UsersReducer from "./UsersReducer"
import JobsReducer from "./JobsReducer";
import ReportsReducer from "./ReportsReducer";
import CompaniesReducer from "./CompaniesReducer";
import ApplicationsReducer from "./ApplicationsReducer";
import NotificationsReducer from "./NotificationsReducer";
import SettingsReducer from "./SettingsReducer";
import AuditLogsReducer from "./AuditLogsReducer";

export default combineReducers({
    UsersStateData: UsersReducer,
    JobsStateData: JobsReducer,
    ReportStateData: ReportsReducer,
    CompaniesStateData: CompaniesReducer,
    ApplicationsStateData: ApplicationsReducer,
    NotificationsStateData: NotificationsReducer,
    SettingsStateData: SettingsReducer,
    AuditLogsStateData: AuditLogsReducer,
})