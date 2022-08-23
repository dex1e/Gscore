import { IAuthInitialState } from "./types";

export const initialState: IAuthInitialState = {
  token: "",
  user: { id: null, email: "", username: "" },
};
