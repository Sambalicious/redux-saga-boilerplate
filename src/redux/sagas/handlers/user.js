import { getUserRequest } from "./../request/user";
import { call, put } from "redux-saga/effects";
import { getUserFailure, getUserSuccess } from "../../ducks/userSlice";

export function* handleGetOneUsers(action) {
  try {
    const response = yield call(getUserRequest, action.payload.id);

    console.log(response.data);

    yield put(getUserSuccess({ ...response.data }));
  } catch (error) {
    yield put(getUserFailure(error.message));
    console.log(error);
  }
}
