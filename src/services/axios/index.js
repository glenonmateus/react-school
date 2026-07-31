import axios from "axios";
import { toast } from "react-toastify";
import store from "store";

const api = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.user.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

const handleAxiosError = (error) => {
  if (error.response) {
    const errors = error.response.data.errors;
    errors.map((error) => toast.error(error));
  } else if (error.resquest) {
    toast.error("Nao foi possivel conectar ao servidor");
  } else {
    toast.error(error.message);
  }
  throw new Error(error.message);
};

export { handleAxiosError };
export default api;
