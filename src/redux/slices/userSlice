import { createSlice } from "@reduxjs/toolkit";
import { registerUser, logInUser, logOutUser, refreshUser } from "../operations/userOperations";

const handleAuthUser = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
};

const handleLogOutUser = (state) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
};

const hadleRefreshUser = (state, action) => {
    state.user = action.payload;
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
    extraReducers: builder =>
        builder
            .addCase(registerUser.fulfilled, handleAuthUser)
            .addCase(logInUser.fulfilled, handleAuthUser)
            .addCase(logOutUser.fulfilled, handleLogOutUser)
            .addCase(refreshUser.pending, state => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.fulfilled, hadleRefreshUser)
            .addCase(refreshUser.rejected, state => {
                state.isRefreshing = false;
            })
});

export const phonebookUserReducer = phonebookUserSlice.reducer;
