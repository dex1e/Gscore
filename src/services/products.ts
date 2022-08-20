import { APIURL } from "constant";

import ApiService from "./ApiService";

export const GET_PRODUCTS = async () => {
  return ApiService.GET(APIURL.GET_PRODUCTS);
};
