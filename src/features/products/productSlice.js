import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService"


export const getAllProducts = createAsyncThunk(
  "product/get",
  async (thunkAPI) => {
    try {
      return await productService.getProducts()
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addToWishlist = createAsyncThunk(
  "product/wishlist",
  async (proId,thunkAPI) => {
    try {
      return await productService.addToWishlist(proId)
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const productState = {
    product: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
  };
export const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
        // if (state.isSuccess === true) {
        //   toast.info("user Created Successfully");
        // }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        // if (state.isError === true) {
        //   toast.error(action.error);
        // }
      }).addCase(addToWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addToWishlist = action.payload;
        state.message = "Product Added to wishlist Successfully!";
        // if (state.isSuccess === true) {
        //   toast.info("user Created Successfully");
        // }
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        // if (state.isError === true) {
        //   toast.error(action.error);
        // }
      })
      
       
  },
});

export default authSlice.reducer;
