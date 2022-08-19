import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "types";

import { initialState } from "./initialState";
import { IAuthInitialState } from "./types";

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.auth.token = action.payload;
    },

    setUser: (state, action: PayloadAction<IUser>) => {
      state.auth.user = action.payload;
    },
  },
});

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
