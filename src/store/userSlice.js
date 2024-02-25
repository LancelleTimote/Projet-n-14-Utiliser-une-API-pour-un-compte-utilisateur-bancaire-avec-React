import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./authSlice";

//état initial du slice de l'user
const initialState = {
    //état de charge des données user
    status: "VOID",
    //données de l'user
    userData: {},
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //reducer définition profil user
        setUserProfile: (state, action) => {
            //màj des données user
            state.userData = action.payload;
        },
        resetUser: (state) => {
            state.userData = {};
        },
    },
    extraReducers: (builder) => {
        builder.addCase(logout, (state) => {
            //réinitialise les données de l'utilisateur lors de la déconnexion
            state.userData = {};
        });
    },
});

export const { setUserProfile, resetUser } = userSlice.actions;

export default userSlice.reducer;
