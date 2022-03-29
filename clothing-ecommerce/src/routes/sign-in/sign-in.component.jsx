import React, { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopUp,
} from "../../utils/firebase.utils";
import FormInput from "../../components/ui/form-input/form-input.component";
import "./sign-in.style.scss";
import Button from "../../components/ui/button/button.component";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { email, password } = formFields;



  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log("userDocref", userDocRef);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response)
    } catch (error) {
      console.log("user login encoutered an error", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target; //Takes the input's unique name and values
    setformFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign In With Your Email And Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="google" onClick={signInWithGoogle}>
             Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
