import { toast } from "react-toastify";
import API from "../../utils/interceptor";

const registerTheAdminService = async (obj) => {
  let API_URL = `admin/registerAdmin`;
  const res = await API.post(API_URL, obj);
  toast.success(res.data.message, { theme: "colored" });
  return res.data;
};

const registerTheAdminWithGoogleService = async (obj) => {
  let API_URL = `admin/registerAdminGoogle`;
  const { history } = obj;
  const res = await API.post(API_URL, obj);
  if (res.status === 200 || res.status === 201) {
    localStorage.setItem("token", res.data.token);
  }
  if (res.data) {
    history("/admin/products/agility");
  }
  return res.data;
};

const registerTheAdminWithFacebookService = async (obj) => {
  let API_URL = `admin/registerAdminFacebook`;
  const { history, response } = obj;
  const res = await API.post(API_URL, response);
  if (res.status === 200 || res.status === 201) {
    localStorage.setItem("token", res.data.token);
  }
  if (res.data) {
    history("/admin/products/agility");
  }
  return res.data;
};

const loginTheAdminService = async (obj) => {
  let API_URL = `admin/loginAdmin`;
  const { history } = obj;
  const res = await API.post(API_URL, obj);
  if (res.status === 200 || res.status === 201) {
    localStorage.setItem("token", res.data.token);
  }
  if (res.data) {
    history("/admin/products/agility");
  }
  return res.data;
};

const editTheAdminService = async (obj) => {
  let API_URL = `admin/editAdmin/${obj._id}`;
  const res = await API.put(API_URL, obj);
  toast.success(res.data.message, { theme: "colored" });
  return res.data;
};

const adminService = {
  loginTheAdminService,
  registerTheAdminService,
  registerTheAdminWithGoogleService,
  registerTheAdminWithFacebookService,
  editTheAdminService,
};

export default adminService;
