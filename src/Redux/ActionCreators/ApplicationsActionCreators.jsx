import { CREATE_APPLICATIONS, DELETE_APPLICATIONS, GET_APPLICATIONS, UPDATE_APPLICATIONS } from "../Constants"

export function createApplications(data) {
    return {
        type : CREATE_APPLICATIONS,
        payload: data
    }
}

export function getApplications() {
    return {
        type : GET_APPLICATIONS,       
    }
}

export function updateApplications(data) {
    return {
        type : UPDATE_APPLICATIONS,
        payload: data
    }
}
export function deleteApplications(data) {
    return {
        type : DELETE_APPLICATIONS,
        payload: data
    }
}