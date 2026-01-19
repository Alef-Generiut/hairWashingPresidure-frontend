import axios from "axios";
import { userDto, userLogin } from "../types/types";
import { API_HEADERS } from "../constants/constants";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/auth`,
  headers: API_HEADERS,
});

export const AuthAPI = {
  login: (loginUser: userLogin) =>
    API.post("/login", loginUser).then((res) => res.data),
  create: (user: userDto) => API.post("/", user).then((res) => res.data),
};
