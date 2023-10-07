import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import blogService from "./blogService";

const initialState = {
  blogs: [],
  allBlogs: [],
  blog: {},
  total: 0,
  page: 1,
  isLoading: false,
  isSuccess: false,
  isError: false,
  isBlogUpdated: false,
  isBlogDeleted: false,
};

export const postTheBlog = createAsyncThunk(
  "blog/postTheBlog",
  async (obj, thunkAPI) => {
    try {
      return await blogService.postTheBlog(obj);
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editTheBlog = createAsyncThunk(
  "blog/editTheBlog",
  async (obj, thunkAPI) => {
    try {
      return await blogService.editTheBlog(obj);
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getTheBlogs = createAsyncThunk(
  "blog/getTheBlogs",
  async (obj, thunkAPI) => {
    try {
      return await blogService.getAllBlogs(obj);
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const blogById = createAsyncThunk(
  "blog/blogById",
  async (obj, thunkAPI) => {
    try {
      return await blogService.getTheBlogById(obj);
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteBlogById = createAsyncThunk(
  "blog/deleteTheBlog",
  async (obj, thunkAPI) => {
    try {
      return await blogService.deleteTheBlogById(obj);
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    reset: (state) => {
      state.blogs = [];
      state.allBlogs = [];
      state.blog = {};
      state.mayLikeBlogs = [];
      state.total = 0;
      state.page = 1;
      // state.isLoading = false;
      // state.isSuccess = false;
      // state.isError = false;
    },
    setAllBlogs: (state) => {
      //forInfiniteScroll
      state.allBlogs = [
        ...state.allBlogs,
        ...(state.blogs?.length ? state.blogs : []),
      ];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postTheBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postTheBlog.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(postTheBlog.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(blogById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(blogById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blog = action.payload;
      })
      .addCase(blogById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // state.blog = {};
      })
      .addCase(editTheBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTheBlog.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isBlogUpdated = !state.isBlogUpdated;
      })
      .addCase(editTheBlog.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getTheBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTheBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs = action.payload.data;
        state.total = action.payload.count;
      })
      .addCase(getTheBlogs.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteBlogById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBlogById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isBlogUpdated = !state.isBlogUpdated;
      })
      .addCase(deleteBlogById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { setAllBlogs, reset } = blogSlice.actions;
export default blogSlice.reducer;
