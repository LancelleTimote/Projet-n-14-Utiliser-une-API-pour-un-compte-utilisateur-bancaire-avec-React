import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setToken } from "./authSlice";
import { setUserProfile } from "./userSlice";

//thunk async pour la co utilisateur
export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }, thunkAPI) => {
    try {
        //envoi requête co à l'API
        const response = await axios.post("http://localhost:3001/api/v1/user/login", { email, password });

        console.log("Token retourné dans le login : ", response.data.body.token);

        //sauvegarde du token dans le state redux
        thunkAPI.dispatch(setToken(response.data.body.token));

        //on retourne le corps de la réponse si tout est ok
        return thunkAPI.fulfillWithValue(response.data.body);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});

//thunk async pour récup le profil user
export const fetchUserProfile = createAsyncThunk("user/fetchUserProfile", async (_, thunkAPI) => {
    try {
        //récup du token dans le state redux
        const { token } = thunkAPI.getState().auth;
        //envoi requête pour récup profil user
        const response = await axios.post(
            "http://localhost:3001/api/v1/user/profile",
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        //on retourne les données de l'utilisateur dans le reducer user userData
        thunkAPI.dispatch(setUserProfile(response.data.body));
        //on retourne les données du profil user
        return response.data.body;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});

//thunk async pour màj le profil user
export const updateUserName = createAsyncThunk("user/updateUserName", async ({ token, newFirstName, newLastName }, thunkAPI) => {
    try {
        const response = await axios.put(
            "http://localhost:3001/api/v1/user/profile",
            { firstName: newFirstName, lastName: newLastName },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        //retourner les nouvelles infos users màj
        return response.data.body;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});
