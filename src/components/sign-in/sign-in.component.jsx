import React, { Component } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />

          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
