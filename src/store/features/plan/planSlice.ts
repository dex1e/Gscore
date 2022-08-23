import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IPlan } from "types";

import { initialState } from "./initialState";

export const authSlice = createSlice({
  name: "plan",
  initialState,

  reducers: {
    setPlanProduct: (state, action: PayloadAction<IPlan>) => {
      state.plan = action.payload;
    },
  },
});

export const { setPlanProduct } = authSlice.actions;

export default authSlice.reducer;
