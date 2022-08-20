import { APIURL } from "constant";

import ApiService, { instance } from "./ApiService";

export const registerUser = async (
  email: any,
  username: any,
  password: any
) => {
  return instance.post(APIURL.POST_SIGN_UP, { email, username, password });
};

export const loginUser = async (email: any, password: any) => {
  return ApiService.POST(APIURL.POST_SIGN_IN, { email, password });
};

export const GET_ME = async () => {
  return ApiService.GET(APIURL.GET_ME);
};
