import { CREATE_AUDITLOGS, DELETE_AUDITLOGS, GET_AUDITLOGS, UPDATE_AUDITLOGS } from "../Constants"

export function createAuditLogs(data) {
    return {
        type : CREATE_AUDITLOGS,
        payload: data
    }
}

export function getAuditLogs() {
    return {
        type : GET_AUDITLOGS,       
    }
}

export function updateAuditLogs(data) {
    return {
        type : UPDATE_AUDITLOGS,
        payload: data
    }
}
export function deleteAuditLogs(data) {
    return {
        type : DELETE_AUDITLOGS,
        payload: data
    }
}