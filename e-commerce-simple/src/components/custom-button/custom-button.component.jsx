import React from "react";
import './custom-button.style.scss'
const CustomButton = ({ children, buttonType ,...otherProps }) => {
  return (
    <button className={`${buttonType==='google'?'google-sign-in':''} custom-button`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
