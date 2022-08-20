import { APIURL } from "constant";

import { instance } from "./ApiService";

export const buySubscription = async (priceId: any) => {
  const json = JSON.stringify({ priceId });

  return instance.post(APIURL.BUY_SUBSCRIBE, json);
};
