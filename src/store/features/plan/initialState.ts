import { IPlanInitialState } from "./types";

export const initialState: IPlanInitialState = {
  plan: {
    id: 0,
    sitesCount: 0,
    name: "",

    prices: [
      {
        id: 0,
        isActive: false,
        productId: 0,
        price: "",
      },
    ],
  },
};
