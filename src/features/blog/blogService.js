import { toast } from "react-toastify";
import API from "../../utils/interceptor";

const postTheBlog = async (obj) => {
  let API_URL = `/blog/postTheBlog`;
  const res = await API.post(API_URL, obj);
  toast.success(res.data.message, { theme: "colored" });
  return res.data;
};

const getAllBlogs = async (obj) => {
  let API_URL = `/blog/allBlogs?category=${obj.category}&page=${obj.page}&limit=${obj.limit}`;
  const res = await API.get(API_URL);
  // toast.success(res.data.message, { theme: "colored" });
  return res.data;
};

const getTheBlogById = async (obj) => {
  let API_URL = `/blog/blogById/${obj}`;
  const response = await API.get(API_URL);
  // toast.success(response.data.message, { theme: "colored" });
  return response.data;
};

const editTheBlog = async (obj) => {
  let API_URL = `/blog/updateTheBlog/${obj.id}`;
  const res = await API.put(API_URL, obj);
  toast.success(res.data.message, { theme: "colored" });
  return res.data;
};

const deleteTheBlogById = async (obj) => {
  let API_URL = `/blog/deleteTheBlog/${obj}`;
  const response = await API.delete(API_URL);
  toast.success(response.data.message, { theme: "colored" });
};

const blogService = {
  postTheBlog,
  editTheBlog,
  getAllBlogs,
  getTheBlogById,
  deleteTheBlogById,
};

export default blogService;
