import { api } from "../utils/http/api"

export const getAllProducts = async () => {
  const res = await api().get(`/ecommerce/products?page=1&limit=10`);
  return res.data.data.products;
};

export const handleDeleteItemFromCart = async (id: string) => {
   const res =await api().delete(`/ecommerce/cart/item/${id}`)
   return res.data;

}  //delete button on cart items

export const getCategoryType = async () => {
   const req = await api().get(`/ecommerce/categories?page=1&limit=4`)
   return req;
} // get categories type list




export const getProductsOfCategory = async (categoryId:string) => {
   const res = await api().get(`/ecommerce/products/category/${categoryId}?page=1&limit=5
`)
   return res.data.data;
} // get product of particular category