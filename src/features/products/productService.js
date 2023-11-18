import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getProducts= async(userData)=>{
    const response =await axios.post(`${base_url}product`,userData);
    if(response.data){
        return response.data
    }
}


export const productService={
   getProducts
}