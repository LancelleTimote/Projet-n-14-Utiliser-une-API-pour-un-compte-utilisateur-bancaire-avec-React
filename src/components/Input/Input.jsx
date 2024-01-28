import "./Input.scss";

function Input({ wrapperClass, labelFor, labelText, inputType, inputId }) {
    return (
        <div className={wrapperClass}>
            <label for={labelFor}>{labelText}</label>
            <input type={inputType} id={inputId} />
        </div>
    );
}

export default Input;
