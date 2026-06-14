import { 
    CREATE_NOTIFICATIONS, 
    DELETE_NOTIFICATIONS, 
    GET_NOTIFICATIONS, 
    UPDATE_NOTIFICATIONS,
    MARK_READ,          // ✅ new constant
    MARK_UNREAD         // (optional) agar unread bhi chahiye
} from "../Constants"

// Create
export function createNotifications(data) {
    return {
        type : CREATE_NOTIFICATIONS,
        payload: data
    }
}

// Get
export function getNotifications() {
    return {
        type : GET_NOTIFICATIONS,       
    }
}

// Update
export function updateNotifications(data) {
    return {
        type : UPDATE_NOTIFICATIONS,
        payload: data
    }
}

// Delete
export function deleteNotifications(data) {
    return {
        type : DELETE_NOTIFICATIONS,
        payload: data
    }
}

// ✅ Mark Read
export function markRead(id) {
    return {
        type : MARK_READ,
        payload: id
    }
}

// (Optional) Mark Unread
export function markUnread(id) {
    return {
        type : MARK_UNREAD,
        payload: id
    }
}
