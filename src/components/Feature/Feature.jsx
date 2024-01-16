import "./Feature.scss";

function Feature({ icon, description, title, paragraph }) {
    return (
        <div className="feature-item">
            <img src={icon} alt={description} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{paragraph}</p>
        </div>
    );
}

export default Feature;
