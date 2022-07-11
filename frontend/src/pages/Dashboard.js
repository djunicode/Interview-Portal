import React from "react";
import ProfileProgress from "../components/ProfileProgress";
import InterviewScheduleCard from "../components/InterviewScheduleCard";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import TimeLine from "../components/Timeline";
import TabPanel from "../components/TasksSection";
const useStyles = makeStyles((theme) => ({
	flexItem: {
		display: "flex",
		height: "100%",
		backgroundColor: "#F2F3F7",
		justifyContent: "space-around",
		[theme.breakpoints.down("md")]: {
			marginLeft: "20px!important",
		},
	},
}));

const Dashboard = () => {
	const classes = useStyles();

	return (
		<>
		  <Grid container columnSpacing={4} className={classes.flexItem}>
		    <Grid item md={5} xs={10}>
		      <Grid item xs={10} lg={12} md={12} mt={3}>
		        <ProfileProgress />
		      </Grid>
		      <Grid item xs={10} lg={12} md={12} mt={7}>
		        <InterviewScheduleCard />
		      </Grid>
		    </Grid>

		    <Grid item md={5} xs={10}>
		      <Grid item xs={10} md={12} mt={3} lg={12}>
		        <TimeLine />
		      </Grid>
		    </Grid>

		    <Grid item md={11} xs={10} lg={11}>
		      <Grid item md={12} xs={10} mt={3} lg={12} mb={5}>
		        <TabPanel />
		      </Grid>
		    </Grid>
		  </Grid>
		</>
	);
};

export default Dashboard;
