import { combineReducers } from "redux";
import auth from "store/modules/auth/reducer";

const rootReducer = combineReducers({ auth });

export default rootReducer;
