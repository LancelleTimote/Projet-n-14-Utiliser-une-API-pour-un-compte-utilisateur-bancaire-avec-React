import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./SignIn.scss";
import Input from "../../components/Input/Input";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, fetchUserProfile } from "../../store/authThunk";
import { loginSuccess } from "../../store/authSlice";
import { setToken } from "../../store/authSlice";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    //init dispatch pour envoyer actions au store
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //besoin de réint le message d'erreur
        setErrorMessage("");

        try {
            const rememberMe = document.getElementById("remember-me").checked;
            console.log("Remember Me coché:", rememberMe);

            //appel du thunk loginUser pour la co
            const response = await dispatch(loginUser({ email, password })).unwrap();

            //si remember coché, enregistrement du token
            if (rememberMe) {
                dispatch(setToken(response.token));
            }

            //dispatch action co réussi
            dispatch(
                loginSuccess({
                    token: response.token,
                    user: {},
                })
            );

            dispatch(fetchUserProfile());
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
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default SignIn;
