import { createSlice } from "@reduxjs/toolkit";
import { registerUser, logInUser, logOutUser, refreshUser } from "../api/userApi";

const handleAuthUser = (state, action) => {
  const { user, token } = action.payload;
  state.user = user;
  state.token = token;
  state.isLoggedIn = true;
};

const handleLogOutUser = (state) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshUser = (state, action) => {
  const user = action.payload;
  state.user = user;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const phonebookUserSlice = createSlice({
  name: "user",
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  reducers: {}, // Add reducers here if needed
  extraReducers: (builder) =>
    builder
      .addCase(registerUser.fulfilled, handleAuthUser)
      .addCase(logInUser.fulfilled, handleAuthUser)
      .addCase(logOutUser.fulfilled, handleLogOutUser)
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, handleRefreshUser)
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      }),
});

export const phonebookUserReducer = phonebookUserSlice.reducer;

