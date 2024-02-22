import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";

const store = configureStore({
    reducer: {
        //reducer gestion auth
        auth: authReducer,
        //reducer gestion données user
        user: userReducer,
    },
});

export default store;
