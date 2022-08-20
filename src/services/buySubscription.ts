import { APIURL } from "constant";

import ApiService from "./ApiService";

export const buySubscription = async (priceId: any) => {
  return ApiService.post(APIURL.BUY_SUBSCRIBE, { priceId });
};
