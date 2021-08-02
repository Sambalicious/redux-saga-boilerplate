import { applyMiddleware, combineReducers, createStore } from "redux";
import { UsersReducers } from "../reducers/users";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas/rootSaga";

const reducer = combineReducers({
  users: UsersReducers,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
