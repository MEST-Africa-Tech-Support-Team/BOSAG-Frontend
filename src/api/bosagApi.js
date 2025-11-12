import axios from "axios";

const API_BASE = import.meta.env.VITE_BASE_URL; 

const bosagApi = axios.create({
  baseURL: API_BASE,
});

bosagApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("bosagToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default bosagApi;
