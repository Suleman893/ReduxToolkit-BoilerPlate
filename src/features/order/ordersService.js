import { toast } from "react-toastify";
import API from "../../utils/interceptor";

const getAllOrdersService = async (obj) => {
    let API_URL = `/order/getAllOrders`;
    const res = await API.get(API_URL);
    // toast.success(res.data.message, { theme: "colored" });
    return res.data;
  };
  
  const orderService = {
    getAllOrdersService,
  };
  
  export default orderService;