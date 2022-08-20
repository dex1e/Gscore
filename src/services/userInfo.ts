import { APIURL } from "constant";

import ApiService from "./ApiService";

export const updatePersonalInfo = async (email: string, username: string) => {
  return ApiService.patch(APIURL.PATCH_UPDATE_PERSONAL_INFO, {
    email,
    username,
  });
};
