import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./SignIn.scss";

function SignIn() {
    return (
        <div className="main flex">
            <Header />
            <div className="main bg-dark">
                <section className="sign-in-content">
                    <FontAwesomeIcon className="sign-in-icon" icon={faUserCircle} />
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label for="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper">
                            <label for="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>
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
