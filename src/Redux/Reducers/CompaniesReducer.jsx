import { CREATE_COMPANIES_RED, DELETE_COMPANIES_RED, GET_COMPANIES_RED, UPDATE_COMPANIES_RED } from "../Constants";


export default function COMPANIESCompanies(state = [], action) {
    switch (action.type) {
        case CREATE_COMPANIES_RED:
            return [...state, action.payload]

        case GET_COMPANIES_RED:
            return action.payload

        case UPDATE_COMPANIES_RED:
            let index = state.findIndex(x => x.id === action.payload.id)
            state[index] = { ...action.payload }
            return state

        case DELETE_COMPANIES_RED:
            return state.filter(x => x.id !== action.payload.id)

        default:
            return state
    }
}