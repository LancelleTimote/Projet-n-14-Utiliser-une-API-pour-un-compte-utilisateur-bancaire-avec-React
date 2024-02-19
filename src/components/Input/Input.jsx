import "./Input.scss";

function Input({ wrapperClass, labelFor, labelText, inputType, inputId, onChange, name, value }) {
    return (
        <div className={wrapperClass}>
            <label htmlFor={labelFor}>{labelText}</label>
            <input type={inputType} id={inputId} onChange={onChange} name={name} value={value} />
        </div>
    );
}

export default Input;
