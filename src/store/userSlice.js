import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {},
    loading: false,
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserProfile: (state, action) => {
            state.userData = action.payload;
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

export const { setUserProfile, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;
