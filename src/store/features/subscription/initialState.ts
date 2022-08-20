import { ISubscriptionInitialState } from "./types";

export const initialState: ISubscriptionInitialState = {
  subscribe: {
    id: null,
    userId: null,
    currentPeriodStart: null,
    currentPeriodEnd: null,
  },
};
