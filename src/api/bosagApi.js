import axios from "axios";

const API_BASE = import.meta.env.VITE_BASE_URL; // <- match your .env.local

const bosagApi = axios.create({
  baseURL: API_BASE,
});

bosagApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default bosagApi;
