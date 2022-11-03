// THIRD-PARTY
import axios, { AxiosError } from "axios";

const BASE_URL = process.env.REACT_APP_SERVER;

const axiosServices = axios.create({
  baseURL: BASE_URL,
});
// interceptor for http
axiosServices.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong!"
    );
  }
);

export default axiosServices;

export const userRequest = axios.create({
  baseURL: BASE_URL,
});
