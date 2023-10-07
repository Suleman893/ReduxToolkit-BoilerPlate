import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supplierService from "./supplierService";
import { toast } from "react-toastify";

const initialState = {
  suppliers: [],
  isSupplierChanged: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const addTheSupplier = createAsyncThunk(
  "supplier/addTheSupplier",
  async (obj, thunkApi) => {
    try {
      return await supplierService.addTheSupplier(obj);
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getAllSuppliers = createAsyncThunk(
  "supplier/getAllSuppliers",
  async (obj, thunkApi) => {
    try {
      return await supplierService.getAllSupplier();
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {
    reset: (state) => {
      state.suppliers = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTheSupplier.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTheSupplier.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isSupplierChanged = !state.isSupplierChanged;
      })
      .addCase(addTheSupplier.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getAllSuppliers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSuppliers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.suppliers = action.payload.data;
        // state.isSupplierChanged = !state.isSupplierChanged;
      })
      .addCase(getAllSuppliers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = supplierSlice.actions;
export default supplierSlice.reducer;
