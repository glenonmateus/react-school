import { combineReducers } from "redux";
import auth from "store/modules/auth/reducer";
import student from "store/modules/student/reducer";
import user from "store/modules/user/reducer";

const reducers = { auth, student, user };

export default combineReducers(reducers);
