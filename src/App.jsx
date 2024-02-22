import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Error from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";

import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchUserProfile } from "./store/authThunk";
import { loginSuccess } from "./store/authSlice";

function App() {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    useEffect(() => {
        if (token) {
            dispatch(fetchUserProfile(token)).then((action) => {
                if (action.type.endsWith("fulfilled")) {
                    dispatch(loginSuccess({ token, user: action.payload }));
                }
            });
        }
    }, [token, dispatch]);

    return (
        <Router>
            <main className="main flex">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signIn" element={isLoggedIn ? <Navigate to="/profile" /> : <SignIn />} />
                    <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/signIn" />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
