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

    //init dispatch pour envoyer actions à Redux
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //besoin de réint le message d'erreur
        setErrorMessage("");

        try {
            const rememberMe = document.getElementById("remember-me").checked;

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
                        <Input containerClass={"input-wrapper"} htmlFor={"email"} labelText={"Email"} name="email" type={"text"} inputId={"email"} autoComplete={"argentbank@mail.com"} inputOnChange={(e) => setEmail(e.target.value)} />
                        <Input containerClass={"input-wrapper"} htmlFor={"password"} labelText={"Password"} name="password" type={"password"} inputId={"password"} autoComplete={"new-password"} inputOnChange={(e) => setPassword(e.target.value)} />
                        <Input containerClass={"input-remember"} htmlFor={"remember-me"} labelText={"Remember me"} type={"checkbox"} inputId={"remember-me"} />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button type="submit" className="sign-in-button">
                            Sign In
                        </button>
                    </form>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default SignIn;
