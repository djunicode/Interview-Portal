import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import { makeStyles } from "@mui/styles";
import "../styles/login.css";
const useStyles = makeStyles({});
const Signup = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      setPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required")
        .email("Enter a valid email address"),
      username: Yup.string()
        .max(30, "Exceeded maximum charecter length of 30")
        .required("Required"),
      setPassword: Yup.string()
        .required("Required")
        .min(8, "Minimum legth for password is 8")
        .max(16, "Exceeded maximum charecter length of 16"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("setPassword"), null], "password does not match"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="outerDiv2">
      <div className="innerDiv2">
        <div className="loginHeader">SIGNUP</div>
        <div className="userPass"> username</div>
        <TextField
          variant="outlined"
          id="email"
          email="email"
          type="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="error">{formik.errors.email}</p>
        ) : null}
        <div className="userPass"> username</div>
        <TextField
          variant="outlined"
          id="username"
          email="username"
          type="username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <p className="error">{formik.errors.username}</p>
        ) : null}
        <div className="userPass">Password</div>
        <TextField
          variant="outlined"
          id="setPassword"
          name="setPassword"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.setPassword}
        />
        {formik.touched.setPassword && formik.errors.setPassword ? (
          <p className="error">{formik.errors.setPassword}</p>
        ) : null}
        <div className="userPass"> Confirm Password</div>
        <TextField
          variant="outlined"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <p className="error">{formik.errors.confirmPassword}</p>
        ) : null}
        <div className="dhaaText">
          <div className="dhaaText1">Already have an account?</div>
          <div className="dhaaText2">login</div>
        </div>
        <Button variant="contained">SIGN UP</Button>
      </div>
    </div>
  );
};

export default Signup;
