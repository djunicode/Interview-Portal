import React from "react";
import Signup from "../components/signup";
import "../styles/signupPage.css";
const SignupPage = () => {
  return (
    <div className="outerDivForSignup">
      <div className="gradientDiv"></div>

      <div className="SignupDiv">
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;
