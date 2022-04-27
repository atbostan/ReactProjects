import React from "react";
import "./form-input.style.scss";
const FormInput = ({ label, ...otherInputOptions }) => {
  return (
    <div className="form-group">
      <input className="form-input" {...otherInputOptions} />

      {label && (
        <label
          className={`${
            otherInputOptions.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
