import { APIURL } from "constant";

import ApiService, { instance } from "./ApiService";
import { LocalStorageService } from "./localStorageService";

export const registerUser = async (
  email: any,
  username: any,
  password: any
) => {
  const json = JSON.stringify({ email, username, password });

  return instance.post(APIURL.POSTSIGNUP, json);
};

export const loginUser = async (email: any, password: any) => {
  const json = JSON.stringify({ email, password });

  return ApiService.POST(APIURL.POSTSIGNIN, json);
};

export const getMe = async () => {
  return ApiService.GET(APIURL.GETME);
};
