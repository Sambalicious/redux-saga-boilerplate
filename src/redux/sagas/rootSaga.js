import { takeLatest } from "redux-saga/effects";
import { GET_USERS } from "../types";
import { handleGetAllUsers } from "./handlers/users";

export function* watcherSaga() {
  yield takeLatest(GET_USERS, handleGetAllUsers);
}
