import React from "react";
import Login from "../components/login";
import "../styles/login_signup.css";
const Login_signup = () => {
  return (
    <div className="outerDiv">
      <div className="gradientDiv"></div>
      <div className="loginDiv">
        <Login />
      </div>
    </div>
  );
};

export default Login_signup;
