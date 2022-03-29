import React from "react";
import './button.style.scss'
// Three types of button => i.default , ii.inverted , iii.google sign in

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, type, ...otherButtonProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[type]}`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};

export default Button;
