import { APIURL } from "constant";

import ApiService from "./ApiService";

export const buySubscription = async (priceId: any) => {
  return ApiService.post(APIURL.BUY_SUBSCRIBE, { priceId });
};

export const getMySubscriptions = async () => {
  return ApiService.get(APIURL.GET_MY_SUBSCRIPTIONS);
};
