import axios from "axios";
import { getToken, removeToken } from "../token.utils";




export const api = ()=>{


    const baseUrl = 'https://freeapi-app-production-dfcc.up.railway.app/api/v1/';

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