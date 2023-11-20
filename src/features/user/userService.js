import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const register = async (userData) => {
  console.log("register Req------------> ", userData);
  const response = await axios.post(`${base_url}user/register`, userData);
  console.log("register Response------------> ", response);
  if (response?.data) {
    return response.data;
  }
};
const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response?.data) {
    localStorage.getItem("customer", JSON.stringify(response.data));
    return response.data;
  }
};

const getuserWishlist = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config);
  if (response.data) {
    return response.data;
  }
};
const addToCart = async (cartData) => {
  const response = await axios.post(`${base_url}user/cart`, cartData, config);
  if (response.data) {
    return response.data;
  }
};
const getCart = async () => {
  const response = await axios.get(`${base_url}user/cart`, config);
  if (response.data) {
    return response.data;
  }
};
const forgotPassToken = async (data) => {
  const response = await axios.post(
    `${base_url}user/forgot-passowrd-token`,
    data
  );
  if (response.data) {
    return response.data;
  }
};

const resetPass = async (data) => {
  const response = await axios.post(
    `${base_url}user/reset-passowrd/${data.token}`,
    { password: data?.password }
  );
  if (response.data) {
    return response.data;
  }
};

export const authService = {
  register,
  login,
  getuserWishlist,
  addToCart,
  getCart,
  forgotPassToken,
  resetPass,
};
