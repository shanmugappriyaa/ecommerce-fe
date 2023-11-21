import { DEV_API_URL, PROD_API_URL } from "./Data";

export const base_url =
  process.env.NODE_ENV === "development" ? DEV_API_URL : PROD_API_URL;

const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
  : null;
export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    Accept: "application/json",
  },
};
