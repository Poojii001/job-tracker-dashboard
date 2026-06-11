import { CREATE_SETTINGS_RED, DELETE_SETTINGS_RED, GET_SETTINGS_RED, UPDATE_SETTINGS_RED } from "../Constants";


export default function SettingsReducer(state = [], action) {
    switch (action.type) {
        case CREATE_SETTINGS_RED:
            return [...state, action.payload]

        case GET_SETTINGS_RED:
            return action.payload

        case UPDATE_SETTINGS_RED:
            let index = state.findIndex(x => x.id === action.payload.id)
            state[index] = { ...action.payload }
            return state

        case DELETE_SETTINGS_RED:
            return state.filter(x => x.id !== action.payload.id)

        default:
            return state
    }
}