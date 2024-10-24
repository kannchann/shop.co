import axios from "axios";
import { getToken, removeToken } from "../token.utils";

export const baseUrl = 'http://localhost:8080/api/v1';


export const api = ()=>{
    const axiosConfig = {
        baseURL: baseUrl,
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const instance = axios.create(axiosConfig);

      instance.interceptors.request.use((config) => {
        const token = getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });


      instance.interceptors.response.use((res) => {
        return res;
      },(error) => {
        if (error?.response?.status === 403) {
          throw new Error("i am 403 error");

        }
        if (error?.response?.status === 401) {
            removeToken();
            throw new Error("i am 401 error");
            
        }
      }
    )
    return instance;

    }