import { toast } from "react-toastify";
import API from "../../utils/interceptor";

const addTheSupplier = async (obj) => {
  let API_URL = `supplier/addSupplier`;
  const res = await API.post(API_URL, obj);
  toast.success(res.data.message, { theme: "colored" });
  return res.data;
};

const getAllSupplier = async (obj) => {
  let API_URL = `supplier/getAllSuppliers`;
  const res = await API.get(API_URL);
  toast.success(res.data.message, { theme: "colored" });
  return res.data;
};

const supplierService = {
  addTheSupplier,
  getAllSupplier,
};

export default supplierService;
