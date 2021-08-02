import { getUsersRequest } from "./../request/users";
import { call, put } from "redux-saga/effects";
import { getUserError, getUserSuccess } from "../../actions/users";

export function* handleGetAllUsers() {
  try {
    const response = yield call(getUsersRequest);

    console.log(response);

    yield put(getUserSuccess(response.data));
  } catch (error) {
    yield put(getUserError(error.message));
  }
}
