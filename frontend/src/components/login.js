import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import "../styles/login.css";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  error: {
    display: "flex",
    color: theme.palette.error.main,
  },
}));
const Login = () => {
  const classes = useStyles();
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
        headers: {
          Cookie:
            "csrftoken=lYS6Ws57155J4Ki9iYZz1x2w0PpUe2Sr4mb8R44e1lgymx2kHYNywUJX8bubAK9C; sessionid=kwn1usqi04ydrdpe9x1iolrzx4xo10qg",
          // ...data.getHeaders(),
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(response.data);
          console.log(response.data.token);
          localStorage.setItem("token", response.data.token);
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
        <div className="userPass"> Username</div>
        <TextField
          id="username"
          name="username"
          type="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          variant="outlined"
        />
        {formik.touched.username && formik.errors.username ? (
          <p className={classes.error}>{formik.errors.username}</p>
        ) : null}
        <div className="userPass">Password</div>
        <TextField
          variant="outlined"
          className="styledInput"
          id="password"
          name="password"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className={classes.error}>{formik.errors.password}</p>
        ) : null}
        <div className="dhaaText">
          <div className="dhaaText1">Don't have an account?</div>
          <div className="dhaaText2">Sign Up</div>
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
