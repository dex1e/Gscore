import { instance } from "./instance";
import { LocalStorageService } from "./localStorageService";

export const registerUser = async (
  email: any,
  username: any,
  password: any
) => {
  const json = JSON.stringify({ email, username, password });

  return instance
    .post("api/users/sign-up", json)

    .then((response) => {
      LocalStorageService.setData("token", response.data.token);
    })

    .catch(function (error) {
      console.log(error);
    });
};

export const loginUser = async (email: any, password: any) => {
  const json = JSON.stringify({ email, password });

  return instance
    .post("api/users/sign-in", json)
    .then((response) => {
      LocalStorageService.setData("token", response.data.token);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getMe = async () => {
  return instance
    .get(`api/users/me`)

    .then((response) => response.data)

    .catch(function (error) {
      console.log(error);

      return null;
    });
};
