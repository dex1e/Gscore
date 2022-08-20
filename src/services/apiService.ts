import axios from "axios";

import { BASE_URL } from "constant";
import { store } from "store";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-type": "application/json; charset=UTF-8" },
});

instance.interceptors.request.use((config: any) => {
  const token = store.getState().auth.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

class ApiService {
  get(url: string) {
    return instance.get(url);
  }

  post(url: string, data: any) {
    return instance.post(url, data);
  }
  patch(url: string, data: any) {
    return instance.patch(url, data);
  }
}

export default new ApiService();
