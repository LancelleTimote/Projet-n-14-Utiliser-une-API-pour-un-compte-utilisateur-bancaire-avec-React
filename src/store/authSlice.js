import { createSlice } from "@reduxjs/toolkit";

//état initial du slice de l'auth
const initialState = {
    //pour si l'user est co
    isLoggedIn: false,
    //info sur l'user co
    user: null,
    //token auth de l'user
    token: null,
    //gestion des erreur d'auth
    error: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //pour gérer la co réussi
        loginSuccess: (state, action) => {
            //met à jour l'état de co
            state.isLoggedIn = true;
            //save des infos user
            state.user = action.payload.user;
            //save du token
            state.token = action.payload.token;
            //reset des erreurs
            state.error = null;
        },
        //pour gérer le save du token
        setToken: (state, action) => {
            //save du token
            state.token = action.payload;
        },
        //pour gérer la déco
        logout: (state) => {
            //on réinit l'état de co
            state.isLoggedIn = false;
            //suppr des infos user
            state.user = null;
            //suppr du token
            state.token = null;
            //suppr des erreurs
            state.error = null;
        },
    },
});

export const { loginSuccess, setToken, logout } = authSlice.actions;

export default authSlice.reducer;
