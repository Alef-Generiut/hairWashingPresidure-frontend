import axios from "axios";
import { userDto, userLogin } from "../types/types";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/auth`,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
});

export const AuthAPI = {
  login: (loginUser: userLogin) =>
    API.post("/login", loginUser).then((res) => res.data),
  create: (user: userDto) => API.post("/", user).then((res) => res.data),
};
