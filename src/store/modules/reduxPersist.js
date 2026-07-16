import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "store/modules/rootReducer";

const persistConfig = {
  key: "ApplicationName",
  storage,
  whitelist: ["auth"],
};

export default persistReducer(persistConfig, rootReducer);
