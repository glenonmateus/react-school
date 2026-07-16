import { combineReducers } from "redux";
import auth from "store/modules/auth/reducer";

const reducers = { auth };

export default combineReducers(reducers);
