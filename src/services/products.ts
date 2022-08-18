import { APIURL } from "constant";

import ApiService from "./ApiService";

export const getProducts = async () => {
  return ApiService.GET(APIURL.GETPRODUCTS);
};
