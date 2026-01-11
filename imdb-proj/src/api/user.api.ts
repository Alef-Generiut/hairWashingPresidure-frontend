import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/user`,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

export const UserAPI = {
  get: (userId: string) => API.get(`/${userId}`).then((res) => res.data),
};
