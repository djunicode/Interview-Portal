import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  error: {
    display: "flex",
    color: theme.palette.error.main,
  },
  link: {
    textDecoration: "none!important",
    color: "#ffffff",
  },
}));
const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);

      var FormData = require("form-data");
      var data = new FormData();
      data.append("sapid", values.username);
      data.append("password", values.password);

      var config = {
        method: "post",
        url: "https://unicodeinterview.pythonanywhere.com/accounts/login/",
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(response.data);
          if (response.data.token) {
            console.log(response.data.token);
            navigate("/dashboard");
          } else {
            navigate("/signup");
            alert("Invalid cred");
          }
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });
  console.log(formik.errors);

  return (
    <div className="outerDiv2ForLogin">
      <div className="innerDiv2">
        <div className="loginHeader">LOGIN</div>
        <div className="userPass"> SAP ID</div>
        <TextField
          id="username"
          name="username"
          type="username"
          helperText={
            formik.touched.username && formik.errors.username
              ? formik.errors.username
              : null
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          variant="outlined"
          className="smallfield"
        />

        <div className="userPass">Password</div>
        <TextField
          variant="outlined"
          className="smallfield"
          id="password"
          helperText={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
          name="password"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <div className="dhaaText">
          <div className="dhaaText1">Don't have an account?</div>
          <div>
            <Link to="/signup" className="dhaaText2">
              Sign Up
            </Link>
          </div>
        </div>
        <Button
          className="signBttn"
          variant="contained"
          type="submit"
          onClick={formik.handleSubmit}
        >
          SIGN IN
        </Button>
      </div>
    </div>
  );
};

export default Login;
