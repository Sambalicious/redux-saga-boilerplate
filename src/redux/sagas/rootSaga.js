import { all, fork, takeLatest } from "redux-saga/effects";
import { getUsers } from "../ducks/usersSlice";
import { getUser } from "../ducks/userSlice";
import { handleGetAllUsers } from "./handlers/users";
import { handleGetOneUsers } from "./handlers/user";

export function* watcherSaga() {
  yield all([fork(getAllUserSaga), fork(getOneUserSaga)]);
}

function* getAllUserSaga() {
  yield takeLatest(getUsers.type, handleGetAllUsers);
}
function* getOneUserSaga() {
  yield takeLatest(getUser.type, handleGetOneUsers);
}
