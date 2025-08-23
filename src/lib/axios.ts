import config from "@/config";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: config.baseUrl,
  withCredentials: true,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log("Request Failed", error.response.data.message);

    if (
      error.response.data.status === 500 &&
      error.response.data.message === "jwt expired"
    ) {
      console.log("Your Token is expired");
      try {
        const res = await axiosInstance.post("auth/refresh-token");
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    }
    return Promise.reject(error);
  }
);
