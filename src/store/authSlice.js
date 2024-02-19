import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: null,
    token: null,
    error: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
        },
        // logout: (state) => {
        //     state.isLoggedIn = false;
        //     state.user = null;
        //     state.error = null;
        // },
    },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
