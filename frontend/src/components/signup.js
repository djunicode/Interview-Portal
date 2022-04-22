import React from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const useStyles = makeStyles({});
const Signup = () => {
	const classes = useStyles();

	const formik = useFormik({
		initialValues: {
			email: "",
			username: "",
			setPassword: "",
			confirmPassword: "",
			sapid: "",
			grad_year: "",
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
			sapid: Yup.string()
				.max(11, "Exceeded maximum charecter length of 11")
				.required("Required"),
			grad_year: Yup.string()
				.max(4, "Exceeded maximum charecter length of 4")
				.required("Required"),
		}),
		onSubmit: (values) => {
      console.log(values);
      // var FormData = require("form-data");
      // var data = new FormData();
      var data = JSON.stringify({ 
        
        "user": {
          "name": values.username,
          "sapid": values.sapid,
          "password":values.setPassword,
          "confirm_password": values.confirmPassword,
          "grad_year": values.grad_year,
          "email": "grehashah6@gmail.com"
        }
        
        // data.append("user", ("sapid", values.sapid),
        // ("password", values.setPassword),
        // ("confirm_password", values.confirmPassword),
        // ("grad_year", values.grad_year),
        // ("name", values.username ));
        // data.append("sapid", values.sapid);
        // data.append("password", values.password);
        // data.append("confirm_password", values.confirmPassword);
        // data.append("grad_year", values.grad_year);
        // data.append("name", values.username )
      });
      console.log(data);
      var config = {
        method: 'post',
        url: 'https://unicodeinterview.pythonanywhere.com/accounts/interviewee_register/',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        
        console.log(error);
      });
		},
    
	});
	let navigate = useNavigate();
	return (
		<div className="outerDiv2">
			<div className="innerDiv2">
				<div className="loginHeader">SIGNUP</div>
				<div className="userPass"> EMAIL</div>
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

				<div className="userPass"> USERNAME</div>
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

				<div className="userPass"> SAP ID</div>
				<TextField
					variant="outlined"
					id="sapid"
					type="sapid"
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.sapid}
				/>
				{formik.touched.sapid && formik.errors.sapid ? (
					<p className="error">{formik.errors.sapid}</p>
				) : null}

				<div className="userPass"> Graduation Year</div>
				<TextField
					variant="outlined"
					id="grad_year"
					type="grad_year"
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.grad_year}
				/>
				{formik.touched.grad_year && formik.errors.grad_year ? (
					<p className="error">{formik.errors.grad_year}</p>
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
				<Button variant="contained"
         onClick={formik.handleSubmit}
        //  onClick={() => navigate("/login")}
         >
					SIGN UP
				</Button>
			</div>
		</div>
	);
};

export default Signup;
