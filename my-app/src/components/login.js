import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "../styles/login.css";
const Login = () => {
  return (
    <div className="outerDiv2">
      <div className="innerDiv2">
        <div className="loginHeader">LOGIN</div>
        <div className="userPass"> Username</div>
        <TextField id="outlined-basic" variant="outlined" />
        <div className="userPass">Password</div>
        <TextField id="outlined-basic" variant="outlined" />
        <div className="dhaaText">
          <div className="dhaaText1">Don't have an account?</div>
          <div className="dhaaText2">Sign Up</div>
        </div>
        <Button className="signBttn" variant="contained">
          SIGN IN
        </Button>
      </div>
    </div>
  );
};

export default Login;
