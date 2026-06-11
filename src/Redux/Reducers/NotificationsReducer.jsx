import { CREATE_NOTIFICATIONS_RED, DELETE_NOTIFICATIONS_RED, GET_NOTIFICATIONS_RED, UPDATE_NOTIFICATIONS_RED } from "../Constants";


export default function NotificationsReducer(state = [], action) {
    switch (action.type) {
        case CREATE_NOTIFICATIONS_RED:
            return [...state, action.payload]

        case GET_NOTIFICATIONS_RED:
            return action.payload

        case UPDATE_NOTIFICATIONS_RED:
            let index = state.findIndex(x => x.id === action.payload.id)
            state[index] = { ...action.payload }
            return state

        case DELETE_NOTIFICATIONS_RED:
            return state.filter(x => x.id !== action.payload.id)

        default:
            return state
    }
}