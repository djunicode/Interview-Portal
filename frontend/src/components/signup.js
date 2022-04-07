import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "../styles/login.css";
const Login = () => {
  return (
    <div className="outerDiv2">
      <div className="innerDiv2">
        <div className="loginHeader">SIGNUP</div>
        <div className="userPass"> Email</div>
        <TextField id="outlined-basic" variant="outlined" />
        <div className="userPass"> Username</div>
        <TextField id="outlined-basic" variant="outlined" />
        <div className="userPass">Password</div>
        <TextField id="outlined-basic" variant="outlined" />
        <div className="userPass"> Confirm Password</div>
        <TextField id="outlined-basic" variant="outlined" />
        <div className="dhaaText">
          <div className="dhaaText1">Already have an account?</div>
          <div className="dhaaText2">login</div>
        </div>
        <Button className="signBttn" variant="contained">
          SIGN UP
        </Button>
      </div>
    </div>
  );
};

export default Login;
