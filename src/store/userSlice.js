import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setUserProfile } = userSlice.actions;

export default userSlice.reducer;
