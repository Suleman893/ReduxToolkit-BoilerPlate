import { toast } from "react-toastify";
import API from "../../utils/interceptor";

const addTheSubCategory = async (obj) => {
  let API_URL = `subCategory/addNewSubCategory`;
  const res = await API.post(API_URL, obj);
  toast.success(res.data.message, { theme: "colored" });
  return res.data;
};

const getAllSubCategories = async (obj) => {
  let API_URL = `subCategory/getAllSubCategories`;
  const res = await API.get(API_URL);
  toast.success(res.data.message, { theme: "colored" });
  return res.data;
};

const subCategoryService = {
  addTheSubCategory,
  getAllSubCategories,
};

export default subCategoryService;
