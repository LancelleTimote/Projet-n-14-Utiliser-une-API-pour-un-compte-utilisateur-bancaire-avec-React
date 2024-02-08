import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
    name: "user",
    initialState: {
        lastName: "",
        firstName: "",
        email: "",
        password: "",
        token: "",
        loading: false,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            const { email, password, token } = action.payload;
            state.email = email;
            state.password = password;
            state.token = token;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const { setUser, setLoading, setError } = userSlice.actions;

export const loginUser = (userData) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const response = await axios.post("http://localhost:3001/api/v1/user/login", userData);
        const { token } = response.data;
        localStorage.setItem("token", token);
        dispatch(setUser({ email: userData.email, password: userData.password, token }));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export default userSlice.reducer;
