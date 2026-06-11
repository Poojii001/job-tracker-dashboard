import { CREATE_JOBS_RED, DELETE_JOBS_RED, GET_JOBS_RED, UPDATE_JOBS_RED } from "../Constants";


export default function JobsReducer(state = [], action) {
    switch (action.type) {
        case CREATE_JOBS_RED:
            return [...state, action.payload]

        case GET_JOBS_RED:
            return action.payload

        case UPDATE_JOBS_RED:
            let index = state.findIndex(x => x.id === action.payload.id)
            state[index] = { ...action.payload }
            return state

        case DELETE_JOBS_RED:
            return state.filter(x => x.id !== action.payload.id)

        default:
            return state
    }
}