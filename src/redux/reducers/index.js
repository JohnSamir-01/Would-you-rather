import { combineReducers } from "redux";
import auth from "./auth"
import questions from "./questions"
import users from "./users"
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
    auth,
    questions,
    users,
    loadingBar: loadingBarReducer,
})