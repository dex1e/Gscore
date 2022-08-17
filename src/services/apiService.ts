import { instance } from "./instance";

class api {
  async getProducts() {
    return instance.get(`api/products`);
  }
}

export const productsApiService = new api();
