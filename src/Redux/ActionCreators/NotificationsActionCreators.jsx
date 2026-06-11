import { CREATE_NOTIFICATIONS, DELETE_NOTIFICATIONS, GET_NOTIFICATIONS, UPDATE_NOTIFICATIONS } from "../Constants"

export function createNotifications(data) {
    return {
        type : CREATE_NOTIFICATIONS,
        payload: data
    }
}

export function getNotifications() {
    return {
        type : GET_NOTIFICATIONS,       
    }
}

export function updateNotifications(data) {
    return {
        type : UPDATE_NOTIFICATIONS,
        payload: data
    }
}
export function deleteNotifications(data) {
    return {
        type : DELETE_NOTIFICATIONS,
        payload: data
    }
}