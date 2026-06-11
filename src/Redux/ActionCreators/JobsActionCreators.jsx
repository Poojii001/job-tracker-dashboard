import { CREATE_JOBS, DELETE_JOBS, GET_JOBS, UPDATE_JOBS } from "../Constants"

export function createJobs(data) {
    return {
        type : CREATE_JOBS,
        payload: data
    }
}

export function getJobs() {
    return {
        type : GET_JOBS,       
    }
}

export function updateJobs(data) {
    return {
        type : UPDATE_JOBS,
        payload: data
    }
}
export function deleteJobs(data) {
    return {
        type : DELETE_JOBS,
        payload: data
    }
}