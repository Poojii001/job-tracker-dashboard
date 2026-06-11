import { CREATE_REPORTS_RED, DELETE_REPORTS_RED, GET_REPORTS_RED, UPDATE_REPORTS_RED } from "../Constants";


export default function ReportsReducer(state = [], action) {
    switch (action.type) {
        case CREATE_REPORTS_RED:
            return [...state, action.payload]

        case GET_REPORTS_RED:
            return action.payload

        case UPDATE_REPORTS_RED:
            let index = state.findIndex(x => x.id === action.payload.id)
            state[index] = { ...action.payload }
            return state

        case DELETE_REPORTS_RED:
            return state.filter(x => x.id !== action.payload.id)

        default:
            return state
    }
}