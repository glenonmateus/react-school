import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import persistedReducers from "store/modules/reduxPersist";
import rootSaga from "store/modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "FLUSH",
          "REHYDRATE",
          "PAUSE",
          "PERSIST",
          "PURGE",
          "REGISTER",
          "LOGIN_REQUEST",
          "LOGOUT_REQUEST",
          "persist/PERSIST",
          "persist/PURGE",
          "DELETE_STUDENT_REQUEST",
          "STORE_STUDENT_REQUEST",
        ],
      },
    }).concat(middlewares),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
