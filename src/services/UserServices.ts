import { api } from "../utils/http/api"
export const getUserProfile = async () => {
   const res =await api().get(`/ecommerce/profile`);
   console.log(res);
   return res.data;
  
   

}  
