import { IAuthInitialState } from "./types";

export const initialState: IAuthInitialState = {
  auth: {
    token: "",
    user: { id: 0, email: "", username: "" },
  },
};
