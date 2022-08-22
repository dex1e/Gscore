import { APIURL } from "constant";

import ApiService from "./ApiService";

export const registerUser = async (
  email: string,
  username: string,
  password: string
) => {
  return ApiService.post(APIURL.POST_SIGN_UP, { email, username, password });
};

export const loginUser = async (email: string, password: string) => {
  return ApiService.post(APIURL.POST_SIGN_IN, { email, password });
};

export const getMe = async () => {
  return ApiService.get(APIURL.GET_ME);
};
