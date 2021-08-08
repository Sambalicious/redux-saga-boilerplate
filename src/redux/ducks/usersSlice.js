import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: [],
    error: "",
  },
  reducers: {
    getUsers(state) {
      return { ...state, loading: true };
    },
    getUsersSuccess(state, action) {
      return { ...state, loading: false, users: action.payload };
    },
    getUsersFailure(state, action) {
      return { ...state, loading: false, error: action.payload };
    },
  },
});

export const { getUsers, getUsersSuccess, getUsersFailure } =
  usersSlice.actions;

export default usersSlice.reducer;
