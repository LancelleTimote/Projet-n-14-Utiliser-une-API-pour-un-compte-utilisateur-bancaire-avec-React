import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { setToken, logout, setError } from "./authSlice";
import { setUserProfile } from "./userSlice";

export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }, thunkAPI) => {
    try {
        const response = await axios.post("http://localhost:3001/api/v1/user/login", { email, password });
        thunkAPI.dispatch(setToken(response.data.token));
        // thunkAPI.dispatch(fetchUserProfile());
        const user = useSelector((state) => state.user);
        console.log(user);
        console.log("user");
        console.log(response.data);
        return response.data;
    } catch (error) {
        thunkAPI.dispatch(setError(error.response?.data?.message || error.message));
        throw error;
    }
});

export const fetchUserProfile = createAsyncThunk("user/fetchUserProfile", async (_, thunkAPI) => {
    try {
        const token = sessionStorage.getItem("token");
        const response = await axios.post(
            "http://localhost:3001/api/v1/user/profile",
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        thunkAPI.dispatch(setUserProfile(response.data));
    } catch (error) {
        thunkAPI.dispatch(setError(error.response?.data?.message || error.message));
    }
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, thunkAPI) => {
    try {
        sessionStorage.removeItem("token");
        thunkAPI.dispatch(logout());
    } catch (error) {
        thunkAPI.dispatch(setError(error.response?.data?.message || error.message));
    }
});
