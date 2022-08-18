import axios from "axios";

import { LocalStorageService } from "./localStorageService";

export const instance = axios.create({
  baseURL: "https://gscore-back.herokuapp.com/",
  headers: { "Content-type": "application/json; charset=UTF-8" },
});

instance.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${LocalStorageService.getData(
    "token"
  )}`;

  return config;
});

class ApiService {
  GET(url: string) {
    return instance.get(url);
  }

  POST(url: string, data: any) {
    return instance.post(url, data);
  }
}

export default new ApiService();
