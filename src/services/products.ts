import { APIURL } from "constant";

import ApiService from "./ApiService";

export const GET_PRODUCTS = async () => {
  return ApiService.get(APIURL.GET_PRODUCTS);
};
