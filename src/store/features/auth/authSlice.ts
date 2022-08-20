import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "types";

import { initialState } from "./initialState";

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },

    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },

    // updateUserInfo: (state, action: PayloadAction<string>) => {
    //   state.user.
    // }

    resetUser: (state) => {
      state.token = "";
      state.user = { id: null, email: "", username: "" };
    },
  },
});

export const { setToken, setUser, resetUser } = authSlice.actions;

export default authSlice.reducer;
