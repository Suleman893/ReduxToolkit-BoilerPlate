import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import subCategoryService from "./subCategoryService";
import { toast } from "react-toastify";

const initialState = {
  subCategories: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const addTheSubCategory = createAsyncThunk(
  "subCategory/addNewSubCategory",
  async (obj, thunkApi) => {
    try {
      return await subCategoryService.addTheSubCategory(obj);
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getAllSubCategories = createAsyncThunk(
  "subCategory/getAllSubCategories",
  async (obj, thunkApi) => {
    try {
      return await subCategoryService.getAllSubCategories();
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const subCategorySlice = createSlice({
  name: "subCategory",
  initialState,
  reducers: {
    reset: (state) => {
      state.subCategories = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTheSubCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTheSubCategory.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        // state.isCategoryChange = !state.isCategoryChange;
      })
      .addCase(addTheSubCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getAllSubCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSubCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.subCategories = action.payload.data;
        // state.isCategoryChange = !state.isCategoryChange;
      })
      .addCase(getAllSubCategories.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = subCategorySlice.actions;
export default subCategorySlice.reducer;
