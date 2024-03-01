import Logo from "../../assets/images/argentBankLogo.png";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";

function Header() {
    const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
    const userData = useSelector((state) => state.user.userData);

    const username = userData ? userData.firstName : null;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <header>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {isLoggedIn ? (
                    <div>
                        <Link to="/profile" className="main-nav-item">
                            <FontAwesomeIcon icon={faUserCircle} className="main-nav-item-icon" />
                            {username}
                        </Link>
                        <Link to="/" className="main-nav-item" onClick={logoutHandler}>
                            <FontAwesomeIcon icon={faRightFromBracket} className="main-nav-item-icon" />
                            Sign Out
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/signIn" className="main-nav-item">
                            <FontAwesomeIcon icon={faUserCircle} className="main-nav-item-icon" />
                            Sign In
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
