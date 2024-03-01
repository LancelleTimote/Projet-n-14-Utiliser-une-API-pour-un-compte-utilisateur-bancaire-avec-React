import "./Input.scss";

function Input({ containerClass, htmlFor, labelText, name, type, inputId, autoComplete, inputOnChange }) {
    return (
        <div className={containerClass}>
            <label htmlFor={htmlFor}>{labelText}</label>
            <input name={name} type={type} id={inputId} autoComplete={autoComplete} onChange={inputOnChange} />
        </div>
    );
}

export default Input;
