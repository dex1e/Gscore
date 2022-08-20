import { ISubscriptionInitialState } from "./types";

export const initialState: ISubscriptionInitialState = {
  subscribe: {
    id: 0,
    userId: 0,
    currentPeriodStart: 0,
    currentPeriodEnd: 0,
  },
};
