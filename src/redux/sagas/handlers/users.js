import { getUsersRequest } from "./../request/users";
import { call, put } from "redux-saga/effects";

import { getUsersFailure, getUsersSuccess } from "../../ducks/usersSlice";

export function* handleGetAllUsers() {
  try {
    const response = yield call(getUsersRequest);

    console.log(response.data);

    yield put(getUsersSuccess(response.data));
  } catch (error) {
    yield put(getUsersFailure(error.message));
    console.log(error);
  }
}
