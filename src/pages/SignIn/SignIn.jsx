import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./SignIn.scss";
import Input from "../../components/Input/Input";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, fetchUserProfile } from "../../store/authThunk";
import { loginSuccess, setToken } from "../../store/authSlice";
import { setUserProfile } from "../../store/userSlice";
// import { useNavigate } from "react-router-dom";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();

    // const handleInputChange = (e) => {
    //     console.log(e.target);
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData);
    //     const result = dispatch(loginUser(formData));
    //     console.log(result);
    //     // .then((result) => {
    //     //     navigate("/user");
    //     // })
    //     // .catch((error) => {
    //     //     console.error("Error during login:", error);
    //     // });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        try {
            const rememberMe = document.getElementById("remember-me").checked;
            console.log("Remember Me coché:", rememberMe);

            const response = await dispatch(loginUser({ email, password })).unwrap();

            if (rememberMe) {
                localStorage.setItem("userToken", response.token);
                // dispatch(setToken("userToken", response.token));
            }

            dispatch(
                loginSuccess({
                    token: response.token,
                    user: {},
                })
            );

            dispatch(fetchUserProfile(response.token)).then((action) => {
                if (action.type === "user/fetchUserProfile/fulfilled") {
                    dispatch(setUserProfile(action.payload));
                }
            });
        } catch (error) {
            setErrorMessage(error.message || "Failed to login, please try again.");
        }
    };

    return (
        <div className="main flex">
            <Header />
            <div className="main bg-dark">
                <section className="sign-in-content">
                    <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <Input wrapperClass={"input-wrapper"} name="email" labelFor={"email"} labelText={"Email"} inputType={"text"} inputId={"email"} onChange={(e) => setEmail(e.target.value)} />
                        <Input wrapperClass={"input-wrapper"} name="password" labelFor={"password"} labelText={"Password"} inputType={"password"} inputId={"password"} onChange={(e) => setPassword(e.target.value)} />
                        <Input wrapperClass={"input-remember"} labelFor={"remember-me"} labelText={"Remember me"} inputType={"checkbox"} inputId={"remember-me"} />
                        {/* PLACEHOLDER DUE TO STATIC SITE */}
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button type="submit" className="sign-in-button">
                            Sign In
                        </button>
                        {/* SHOULD BE THE BUTTON BELOW
                        <button className="sign-in-button">Sign In</button> */}
                    </form>
                    <Link to="/signIn" className="main-nav-logo">
                        Sign In
                    </Link>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default SignIn;
