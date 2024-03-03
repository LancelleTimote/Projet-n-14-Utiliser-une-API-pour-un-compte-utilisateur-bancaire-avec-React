import { Link } from "react-router-dom";
import "./Error.scss";

function Error() {
    return (
        <div className="error main">
            <span className="error_number">404</span>
            <p className="error_text">Oups ! La page que vous demandez n'existe pas.</p>
            <Link to={`/`}>Retourner sur la page d'accueil</Link>
        </div>
    );
}

export default Error;
