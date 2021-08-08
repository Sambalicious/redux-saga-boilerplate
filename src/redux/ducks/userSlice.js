import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: {},
    error: "",
  },
  reducers: {
    getUser(state) {
      return { ...state, loading: true };
    },
    getUserSuccess(state, action) {
      return { ...state, loading: false, user: action.payload };
    },
    getUserFailure(state, action) {
      return { ...state, loading: false, error: action.payload };
    },
  },
});

export const { getUser, getUserSuccess, getUserFailure } = userSlice.actions;

export default userSlice.reducer;
