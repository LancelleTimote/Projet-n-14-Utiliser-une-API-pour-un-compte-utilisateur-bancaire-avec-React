// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        lastName: "",
        firstName: "",
        email: "",
        password: "",
        token: "",
    },
    reducers: {
        setUser: (state, action) => {
            const { lastName, firstName, email, password, token } = action.payload;
            state.lastName = lastName;
            state.firstName = firstName;
            state.email = email;
            state.password = password;
            state.token = token;
        },
        clearUser: (state) => {
            state.lastName = "";
            state.firstName = "";
            state.email = "";
            state.password = "";
            state.token = "";
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
