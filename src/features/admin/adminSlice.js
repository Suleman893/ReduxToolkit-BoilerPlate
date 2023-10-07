import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "./adminService";
import { toast } from "react-toastify";

const initialState = {
  adminInfo: null,
  registerAdminInfo: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const registerTheAdmin = createAsyncThunk(
  "admin/registerTheAdmin",
  async (obj, thunkAPI) => {
    try {
      return await adminService.registerTheAdminService(obj);
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registerTheAdminWithGoogle = createAsyncThunk(
  "admin/registerTheAdminWithGoogle",
  async (obj, thunkAPI) => {
    try {
      return await adminService.registerTheAdminWithGoogleService(obj);
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const registerTheAdminWithFacebook = createAsyncThunk(
  "admin/registerTheAdminWithFacebook",
  async (obj, thunkAPI) => {
    try {
      return await adminService.registerTheAdminWithFacebookService(obj);
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginTheAdmin = createAsyncThunk(
  "admin/loginTheAdmin",
  async (obj, thunkAPI) => {
    try {
      return await adminService.loginTheAdminService(obj);
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editTheAdmin = createAsyncThunk(
  "admin/editTheAdmin",
  async (obj, thunkAPI) => {
    try {
      return await adminService.editTheAdminService(obj);
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
    logout(state) {
      state.adminInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginTheAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginTheAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.adminInfo = action.payload;
      })
      .addCase(loginTheAdmin.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.adminInfo = null;
      })
      .addCase(registerTheAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerTheAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.registerAdminInfo = action.payload;
      })
      .addCase(registerTheAdmin.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.registerAdminInfo = null;
      })
      .addCase(registerTheAdminWithGoogle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerTheAdminWithGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.adminInfo = action.payload;
      })
      .addCase(registerTheAdminWithGoogle.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.adminInfo = null;
      })
      .addCase(registerTheAdminWithFacebook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerTheAdminWithFacebook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.adminInfo = action.payload;
      })
      .addCase(registerTheAdminWithFacebook.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.adminInfo = null;
      })
      .addCase(editTheAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTheAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.adminInfo.admin = action.payload.admin;
      })
      .addCase(editTheAdmin.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset, logout } = adminSlice.actions;
export default adminSlice.reducer;
