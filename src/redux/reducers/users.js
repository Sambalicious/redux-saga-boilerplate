import { GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS } from "../types";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

export const UsersReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, loading: true };

    case GET_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };

    case GET_USERS_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
