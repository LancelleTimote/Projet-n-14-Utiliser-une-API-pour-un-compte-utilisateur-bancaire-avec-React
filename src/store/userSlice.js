import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./authSlice";
import { updateUserName, fetchUserProfile } from "./authThunk";

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(logout, (state) => {
                //réinitialise les données de l'utilisateur lors de la déconnexion
                state.userData = {};
            })
            .addCase(updateUserName.fulfilled, (state, action) => {
                //màj toutes les données user
                state.userData = action.payload;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.userData = action.payload;
            });
    },
});

export const { setUserProfile } = userSlice.actions;

export default userSlice.reducer;
