import { APIURL } from "constant";

import ApiService from "./ApiService";

export const activateLicenseCode = async (origin: string, code: string) => {
  return ApiService.post(
    APIURL.POST_ACTIVATE_LICENSE_CODE,
    { code },
    {
      headers: {
        Origin: origin,
      },
    }
  );
};
