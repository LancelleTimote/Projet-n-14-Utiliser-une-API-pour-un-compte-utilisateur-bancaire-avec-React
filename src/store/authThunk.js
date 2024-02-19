import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { setToken, logout, setError } from "./authSlice";
import { setUserProfile } from "./userSlice";

export const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }, thunkAPI) => {
    try {
        const response = await axios.post("http://localhost:3001/api/v1/user/login", { email, password });

        console.log("Token retourné dans le login:", response.data.body.token);

        sessionStorage.setItem("token", response.data.body.token);
        // thunkAPI.dispatch(setToken("token", response.data.body.token));
        return thunkAPI.fulfillWithValue(response.data.body);
        // console.log(response.data.body.token);
        // // Vérifiez que la réponse contient un champ 'token'
        // if (response.data && response.data.body.token) {
        //     // Appeler setToken avec le token extrait de la réponse
        //     thunkAPI.dispatch(setToken("token", response.data.body.token));
        // } else {
        //     // Si le champ 'token' est manquant dans la réponse, lancer une erreur
        //     throw new Error("Token not found in response");
        // }

        // // thunkAPI.dispatch(fetchUserProfile());
        // const user = useSelector((state) => state.user); // Ceci ne fonctionnera pas ici car useSelector ne peut être utilisé en dehors d'un composant React

        // return response.data;
    } catch (error) {
        // thunkAPI.dispatch(setError(error.response?.data?.message || error.message));
        // throw error;
        console.log("Error received:", error);
        return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
});

export const fetchUserProfile = createAsyncThunk("user/fetchUserProfile", async (_, thunkAPI) => {
    try {
        const token = sessionStorage.getItem("token");
        const response = await axios.post(
            "http://localhost:3001/api/v1/user/profile",
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        thunkAPI.dispatch(setUserProfile(response.data));
    } catch (error) {
        // thunkAPI.dispatch(setError(error.response?.data?.message || error.message));
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
