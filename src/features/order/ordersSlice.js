import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./ordersService";
import { toast } from "react-toastify";

const initialState = {
  allOrders: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const getOrders = createAsyncThunk(
  "order/getOrdersHistory",
  async (obj, thunkAPI) => {
    try {
      return await productService.getAllOrdersService(obj);
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    reset: (state) => {
      state.orders = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.allOrders = action?.payload?.data;
      })
      .addCase(getOrders.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default orderSlice.reducer;
