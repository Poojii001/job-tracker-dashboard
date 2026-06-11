import { CREATE_APPLICATIONS_RED, DELETE_APPLICATIONS_RED, GET_APPLICATIONS_RED, UPDATE_APPLICATIONS_RED } from "../Constants";


export default function ApplicationsReducer(state = [], action) {
    switch (action.type) {
        case CREATE_APPLICATIONS_RED:
            return [...state, action.payload]

        case GET_APPLICATIONS_RED:
            return action.payload

        case UPDATE_APPLICATIONS_RED:
            let index = state.findIndex(x => x.id === action.payload.id)
            state[index] = { ...action.payload }
            return state

        case DELETE_APPLICATIONS_RED:
            return state.filter(x => x.id !== action.payload.id)

        default:
            return state
    }
}