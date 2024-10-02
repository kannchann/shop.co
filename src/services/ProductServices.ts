import { api } from "../utils/http/api"
export const handleDeleteItemFromCart = async (id:string) => {
   const res =await api().delete(`/ecommerce/cart/item/${id}`)
   return res.data;

}

export const getCategoryList = async () => {
   const req = await api().get(`/ecommerce/categories?page=1&limit=4`)
   return req;
}