import React from "react";
import "./custom-button.style.scss";
const CustomButton = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`${buttonType === "google" ? "google-sign-in" : ""} ${
        buttonType === "inverted" ? "inverted" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
