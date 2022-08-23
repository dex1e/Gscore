import { IPlanInitialState } from "./types";

export const initialState: IPlanInitialState = {
  plan: {
    id: null,
    sitesCount: null,
    name: "",

    prices: [
      {
        id: null,
        isActive: false,
        productId: null,
        price: "",
      },
    ],
  },
};
