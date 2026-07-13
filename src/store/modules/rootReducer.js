import { combineReducers } from "redux";
import exampleReducer from "store/modules/example/reducer";

const rootReducer = combineReducers({ example: exampleReducer });

export default rootReducer;
