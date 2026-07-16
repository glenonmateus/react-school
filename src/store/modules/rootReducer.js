import { combineReducers } from "redux";
import auth from "store/modules/auth/reducer";
import student from "store/modules/student/reducer";

const reducers = { auth, student };

export default combineReducers(reducers);
