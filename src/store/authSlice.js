import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lastName: "",
    firstName: "",
    token: "",
    isLoggedIn: false,
    user: null,
    error: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.error = null;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload.token;
            state.loading = false;
            state.error = null;
        },
    },
});

export const { loginSuccess, logout, setError, setToken } = authSlice.actions;

export default authSlice.reducer;
