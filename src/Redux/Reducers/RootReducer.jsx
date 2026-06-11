import { combineReducers } from "@reduxjs/toolkit";

import UsersReducer from "./UsersReducer"

export default combineReducers({
    UsersStateData: UsersReducer,
})