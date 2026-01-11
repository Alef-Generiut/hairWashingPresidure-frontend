import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthAPI } from "../../api/auth.api";
import { userLogin } from "../../types/types";
import axios from "axios";

export const login = createAsyncThunk<
  string,
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async ({ email, password }, thunkApi) => {
  try {
    const payload: userLogin = { mail: email, password };
    const res = await AuthAPI.login(payload);
    return res.userId;
  } catch (err) {
    const message = axios.isAxiosError(err)
      ? err.response?.data?.message || "Validation error"
      : "Unexpected login error";
    

    return thunkApi.rejectWithValue(message);
  }
});
