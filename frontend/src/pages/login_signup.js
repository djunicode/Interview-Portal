import React from "react";
import Login from "../components/login";
import "../styles/login_signup.css";
import useMediaQuery from "@mui/material/useMediaQuery";
const Login_signup = () => {
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <div className="outerDiv">
      {!matches && <div className="gradientDiv"></div>}
      <div className="loginDiv">
        <Login />
      </div>
    </div>
  );
};

export default Login_signup;
