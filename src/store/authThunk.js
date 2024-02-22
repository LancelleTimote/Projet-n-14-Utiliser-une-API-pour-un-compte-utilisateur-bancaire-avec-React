import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setUserProfile } from "./userSlice";
import { setToken } from "./authSlice";

export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }, thunkAPI) => {
    try {
        const response = await axios.post("http://localhost:3001/api/v1/user/login", { email, password });

        console.log("Token retourné dans le login : ", response.data.body.token);

        thunkAPI.dispatch(setToken(response.data.body.token));
        return thunkAPI.fulfillWithValue(response.data.body);
    } catch (error) {
        console.log("Error received:", error);
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});

export const fetchUserProfile = createAsyncThunk("user/fetchUserProfile", async (_, thunkAPI) => {
    try {
        const { token } = thunkAPI.getState().auth;
        const response = await axios.post(
            "http://localhost:3001/api/v1/user/profile",
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data.body;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});

// export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, thunkAPI) => {
//     try {
//         sessionStorage.removeItem("token");
//         thunkAPI.dispatch(logout());
//     } catch (error) {
//         thunkAPI.dispatch(setError(error.response?.data?.message || error.message));
//     }
// });
