import { Link } from "react-router-dom";
import "./Error.scss";

function Error() {
    return (
        <div className="error main">
            <span className="error_number">404</span>
            <p className="error_text">Oops ! The page you are requesting does not exist.</p>
            <Link to={`/`}>Return to home page</Link>
        </div>
    );
}

export default Error;
