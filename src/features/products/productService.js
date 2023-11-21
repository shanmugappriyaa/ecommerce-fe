import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getProducts = async (data) => {
  const url = `${base_url}product?${data?.brand ? `brand=${data?.brand}&&` : ""}
  ${data?.tag ? `tags=${data?.tag}&&` : ""}${
    data?.category ? `category=${data?.category}&&` : ""
  }${data?.minPrice ? `price[gte]=${data?.minPrice}&&` : ""}
  ${data?.maxPrice ? `price[lte]=${data?.maxPrice}&&` : ""}`;
  const response = await axios.get(url);
  if (response.data) {
    return response.data;
  }
};
const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  if (response.data) {
    return response.data;
  }
};
const addToWishlist = async (proId) => {
  const response = await axios.post(
    `${base_url}product/wishlist`,
    { proId },
    config
  );
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
  addToWishlist,
  getSingleProduct,
};
