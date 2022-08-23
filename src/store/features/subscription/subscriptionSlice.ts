import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { ISubscription } from "types";

import { initialState } from "./initialState";

export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,

  reducers: {
    setSubscription: (state, action: PayloadAction<ISubscription>) => {
      state.subscribe = action.payload;
    },
  },
});

export const { setSubscription } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
