import { APIURL } from "constant";

import ApiService from "./ApiService";

export const registerUser = async (
  email: any,
  username: any,
  password: any
) => {
  return ApiService.post(APIURL.POST_SIGN_UP, { email, username, password });
};

export const loginUser = async (email: any, password: any) => {
  return ApiService.post(APIURL.POST_SIGN_IN, { email, password });
};

export const getMe = async () => {
  return ApiService.get(APIURL.GET_ME);
};
