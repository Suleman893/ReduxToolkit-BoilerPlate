import axios from "axios";

const API = axios.create({
  // baseURL: "https://backendbt.up.railway.app",
  // baseURL: "http://localhost:5000",
  baseURL: "https://outstanding-moth-boot.cyclic.app",
  timeout: 20000,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

const handleRequest = async (req) => {
  let token = localStorage.getItem("token");
  if (token !== null || token !== undefined) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
};

const handleError = (error) => {
  let parsed_error = Object.assign({}, error);
  if (
    parsed_error.code === "ECONNABORTED" &&
    !parsed_error.config.__isRetryRequest
  ) {
    parsed_error.config.__isRetryRequest = true;
    return API.request(parsed_error.config);
  }
  return Promise.reject(parsed_error?.response?.data);
};

const handleResponse = (response) => {
  return Promise.resolve(response);
};

API.interceptors.request.use(handleRequest);

API.interceptors.response.use(handleResponse, handleError);

export default API;
