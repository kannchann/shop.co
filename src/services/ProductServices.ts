import { api } from "../utils/http/api"
export const handleDeleteItemFromCart = async(id:string) => {
   const res =await api().delete(`/ecommerce/cart/item/${id}`)
   return res.data;

}