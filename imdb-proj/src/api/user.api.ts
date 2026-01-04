import axios from "axios";
import { userDto } from "../types/types";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/user`,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

export const UserAPI = {
  get: (userId: string) => API.get(`/${userId}`).then((res) => res.data),
  reate: (user: userDto) => API.post("/", user).then((res) => res.data),
};