import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./SignIn.scss";
import Input from "../../components/Input/Input";

function SignIn() {
    return (
        <div className="main flex">
            <Header />
            <div className="main bg-dark">
                <section className="sign-in-content">
                    <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
                    <h1>Sign In</h1>
                    <form>
                        <Input wrapperClass={"input-wrapper"} labelFor={"username"} labelText={"Username"} inputType={"text"} inputId={"username"} />
                        <Input wrapperClass={"input-wrapper"} labelFor={"password"} labelText={"Password"} inputType={"password"} inputId={"password"} />
                        <Input wrapperClass={"input-remember"} labelFor={"remember-me"} labelText={"Remember me"} inputType={"checkbox"} inputId={"remember-me"} />
                        {/* PLACEHOLDER DUE TO STATIC SITE */}
                        <a href="./user.html" className="sign-in-button">
                            Sign In
                        </a>
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
