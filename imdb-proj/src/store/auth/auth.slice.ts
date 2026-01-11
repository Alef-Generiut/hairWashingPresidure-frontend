// store/auth/auth.slice.ts
import { createSlice } from "@reduxjs/toolkit";
import { login } from "./auth.thunk";

export type AuthState = {
  userId: string | null;
};

const initialState: AuthState = {
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.userId = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.userId = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
