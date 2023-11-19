import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getProducts= async(userData)=>{
    const response =await axios.post(`${base_url}product`,userData);
    if(response.data){
        return response.data
    }
}
const getSingleProduct= async(id)=>{
    const response =await axios.post(`${base_url}product/${id}`);
    if(response.data){
        return response.data
    }
}
const addToWishlist= async(proId)=>{
    const response =await axios.post(`${base_url}product/wishlist`,{proId},config);
    if(response.data){
        return response.data
    }
}

export const productService={
   getProducts,
   addToWishlist,
   getSingleProduct
}