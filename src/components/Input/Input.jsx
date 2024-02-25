import "./Input.scss";

function Input({ wrapperClass, labelFor, labelText, name, inputType, inputId, autoComplete, onChange }) {
    return (
        <div className={wrapperClass}>
            <label htmlFor={labelFor}>{labelText}</label>
            <input name={name} type={inputType} id={inputId} autoComplete={autoComplete} onChange={onChange} />
        </div>
    );
}

export default Input;
