import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = () => {
  const persistedReducers = persistReducer(
    {
      key: "ApplicationName",
      storage,
      whitelist: ["example"],
    },
    reducers,
  );

  return persistedReducers;
};

export default reducers;
