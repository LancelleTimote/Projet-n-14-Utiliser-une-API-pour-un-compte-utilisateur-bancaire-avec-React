import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./SignIn.scss";
import Input from "../../components/Input/Input";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/authThunk";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleInputChange = (e) => {
        console.log(e.target);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        const result = dispatch(loginUser(formData));
        console.log(result);
        // .then((result) => {
        //     navigate("/user");
        // })
        // .catch((error) => {
        //     console.error("Error during login:", error);
        // });
    };

    return (
        <div className="main flex">
            <Header />
            <div className="main bg-dark">
                <section className="sign-in-content">
                    <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <Input wrapperClass={"input-wrapper"} name="email" labelFor={"email"} labelText={"Email"} inputType={"text"} inputId={"email"} onChange={handleInputChange} value={formData.email} />
                        <Input wrapperClass={"input-wrapper"} name="password" labelFor={"password"} labelText={"Password"} inputType={"password"} inputId={"password"} onChange={handleInputChange} value={formData.password} />
                        <Input wrapperClass={"input-remember"} labelFor={"remember-me"} labelText={"Remember me"} inputType={"checkbox"} inputId={"remember-me"} onChange={handleInputChange} value={formData.rememberMe} />
                        {/* PLACEHOLDER DUE TO STATIC SITE */}
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
