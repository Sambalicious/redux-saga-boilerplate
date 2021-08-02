import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR  } from "../types";

export const getUser = () => ({
  type: GET_USERS,
});


export const getUserSuccess = (payload) => ({
    type: GET_USERS_SUCCESS,
    payload: payload
})

export const getUserError = (payload) => ({
type: GET_USERS_ERROR,
payload: payload
})