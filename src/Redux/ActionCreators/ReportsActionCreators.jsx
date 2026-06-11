import { CREATE_REPORTS, DELETE_REPORTS, GET_REPORTS, UPDATE_REPORTS } from "../Constants"

export function createReports(data) {
    return {
        type : CREATE_REPORTS,
        payload: data
    }
}

export function getReports() {
    return {
        type : GET_REPORTS,       
    }
}

export function updateReports(data) {
    return {
        type : UPDATE_REPORTS,
        payload: data
    }
}
export function deleteReports(data) {
    return {
        type : DELETE_REPORTS,
        payload: data
    }
}