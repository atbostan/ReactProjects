import React from "react";
import SignIn from "../sign-in/sign-in.component";
import SingUp from "../sing-up/sign-up.component";
import "./authentication.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SingUp />
    </div>
  );
};

export default Authentication;
