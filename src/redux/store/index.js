import { combineReducers, configureStore } from "@reduxjs/toolkit";
import usersReducer from "../ducks/usersSlice";
import userReducer from "../ducks/userSlice";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas/rootSaga";

const reducer = combineReducers({
  users: usersReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watcherSaga);

export default store;
