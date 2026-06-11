import { CREATE_COMPANIES, DELETE_COMPANIES, GET_COMPANIES, UPDATE_COMPANIES } from "../Constants"

export function createCompanies(data) {
    return {
        type : CREATE_COMPANIES,
        payload: data
    }
}

export function getCompanies() {
    return {
        type : GET_COMPANIES,       
    }
}

export function updateCompanies(data) {
    return {
        type : UPDATE_COMPANIES,
        payload: data
    }
}
export function deleteCompanies(data) {
    return {
        type : DELETE_COMPANIES,
        payload: data
    }
}