import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import "../styles/signupPage.css";
import "../styles/login_signup.css";

const useStyles = makeStyles((theme) => ({
	grad: {
		backgroundImage: theme.gradient,
		width: "49vw",
		height: "100vh",
		borderRadius: "26px",
		margin: "1%",
		display: "flex",
	},
}));

const Dashboard = () => {
	const classes = useStyles();
	return (
		<>
			<Grid container className={classes.grad}>
				<div>This is Dashboard page</div>
			</Grid>
		</>
	);
};

export default Dashboard;
