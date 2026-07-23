import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "store/modules/rootReducer";

const persistKey = process.env.REACT_APP_APPLICATION_NAME || "root";

const persistConfig = {
  key: persistKey,
  storage,
  whitelist: ["auth", "student"],
};

export default persistReducer(persistConfig, rootReducer);
