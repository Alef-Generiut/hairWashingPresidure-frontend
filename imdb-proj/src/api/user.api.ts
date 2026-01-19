import axios from "axios";
import { API_HEADERS } from "../constants/constants";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/user`,
  headers: API_HEADERS,
});

export const UserAPI = {
  get: (userId: string) => API.get(`/${userId}`).then((res) => res.data),
};
