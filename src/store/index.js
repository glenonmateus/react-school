import { applyMiddleware, legacy_createStore } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import persistedReducers from "store/modules/reduxPersist";
import rootReducer from "store/modules/rootReducer";
import rootSaga from "store/modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = legacy_createStore(
  persistedReducers(rootReducer),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
