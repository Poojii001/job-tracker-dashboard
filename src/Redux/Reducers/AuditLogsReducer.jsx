import { CREATE_AUDITLOGS_RED, DELETE_AUDITLOGS_RED, GET_AUDITLOGS_RED, UPDATE_AUDITLOGS_RED } from "../Constants";


export default function AuditLogsReducer(state = [], action) {
    switch (action.type) {
        case CREATE_AUDITLOGS_RED:
            return [...state, action.payload]

        case GET_AUDITLOGS_RED:
            return action.payload

        case UPDATE_AUDITLOGS_RED:
            let index = state.findIndex(x => x.id === action.payload.id)
            state[index] = { ...action.payload }
            return state

        case DELETE_AUDITLOGS_RED:
            return state.filter(x => x.id !== action.payload.id)

        default:
            return state
    }
}