import { 
    CREATE_NOTIFICATIONS_RED, 
    DELETE_NOTIFICATIONS_RED, 
    GET_NOTIFICATIONS_RED, 
    UPDATE_NOTIFICATIONS_RED,
    MARK_READ_RED,        // ✅ new constant
    MARK_UNREAD_RED       // (optional)
} from "../Constants";

export default function NotificationsReducer(state = [], action) {
    switch (action.type) {
        case CREATE_NOTIFICATIONS_RED:
            return [...state, action.payload];

        case GET_NOTIFICATIONS_RED:
            return action.payload;

        case UPDATE_NOTIFICATIONS_RED:
            return state.map(x =>
                x.id === action.payload.id ? { ...action.payload } : x
            );

        case DELETE_NOTIFICATIONS_RED:
            return state.filter(x => x.id !== action.payload.id);

        // ✅ Mark Read
        case MARK_READ_RED:
            return state.map(x =>
                x.id === action.payload ? { ...x, status: "Read" } : x
            );

        // ✅ Mark Unread (optional)
        case MARK_UNREAD_RED:
            return state.map(x =>
                x.id === action.payload ? { ...x, status: "Unread" } : x
            );

        default:
            return state;
    }
}
