import { api } from "../utils/http/api"
export const getUserProfile = async () => {
   const res =await api().get(`/ecommerce/profile`)
   return res.data;

}  

export const updateUserProfile = async (data: {
   countryCode?: string; // Make optional for PATCH
   firstName?: string; // Make optional for PATCH
   lastName?: string; // Make optional for PATCH
   phoneNumber?: string; // Make optional for PATCH
 }) => {
    try {
        const res = await api().patch(`/ecommerce/profile`, data);
        console.log("API Response:", res.data); // Log the response
        return res.data; // Ensure this returns the expected structure
    } catch (error) {
        console.error("Error updating profile:", error); // Log any errors
        throw error; // Rethrow the error for handling in the calling function
    }
};
