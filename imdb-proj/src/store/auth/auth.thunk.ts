import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserAPI } from "../../api/user.api";
import { userLogin } from "../../types/types";

export const login = createAsyncThunk<
  string, 
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async ({ email, password }, thunkApi) => {
  try {
    const payload: userLogin = { mail: email, password };
    const res = await UserAPI.login(payload);
    return res.userId;
  } catch (err) {
    throw thunkApi.rejectWithValue("Invalid email or password: " + err);
  }
});
