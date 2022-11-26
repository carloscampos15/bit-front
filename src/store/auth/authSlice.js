import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", //'not-authenticated', 'authenticated'
    username: null,
    error: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.username = `${payload.name} ${payload.lastname}`;
      state.error = null;
    },
    logout: (state) => {
      state.status = "not-authenticated";
      state.username = null;
      state.error = null;
    },
    checkQuery: (state) => {
      state.status = "checking";
      state.error = null;
    },
    updateError: (state, { payload }) => {
      state.status = "not-authenticated";
      state.error = payload.error;
    },
  },
});

export const { login, logout, updateError, checkQuery } = authSlice.actions;
