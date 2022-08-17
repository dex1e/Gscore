import axios from "axios";

export const instance = axios.create({
  //   withCredentials: true,
  baseURL: "https://gscore-back.herokuapp.com/",
});

class apiService {
  async getProducts() {
    return instance.get(`api/products`);
  }
}

export default new apiService();
