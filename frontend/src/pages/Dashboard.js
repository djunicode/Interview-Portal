import React from "react";
import SideNavbar from "../components/SideNavbar";
import ProfileProgress from "../components/ProfileProgress";
import InterviewScheduleCard from "../components/InterviewScheduleCard";
import Time from "../components/Time";
import { makeStyles } from "@mui/styles";
import ApplyForIntreview from "../components/ApplyForIntreview";
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
	// background: {
	//   height: "120vh",
	// },
	// body: {
	//   backgroundColor: "#F2F3F7",
	// },
	// rowone: {},
}));

const Dashboard = () => {
	const classes = useStyles();

	return (
		<>
		  <Grid container columnSpacing={5} className={classes.flexItem}>
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
		// <>
		// 	<div
		// 		class="grid-container"
		// 		style={{
		// 			display: "grid",
		// 			gap: "10px",
		// 			backgroundColor: "#2196F3",
		// 			padding: "10px",
		// 		}}
		// 	>
		// 		<div
		// 			class="grid-item item1"
		// 			style={{ gridColumn: " 1 / span 2", gridRow: 1 }}
		// 		>

    
		// 			<ProfileProgress />
    //       <InterviewScheduleCard />
		// 		</div>
		// 		<div
		// 			class="grid-item item2"
		// 			style={{ gridColumn: 3, gridRow: "1 / span 2" }}
		// 		>
		// 			<TimeLine />
		// 		</div>
		// 		<div
		// 			class="grid-item item1"
		// 			style={{ gridColumn: " 1 / span 2", gridRow: 1 }}
		// 		>
		// 			 <ApplyForIntreview />
		// 		</div>
		// 		<div
		// 			class="grid-item item3"
		// 			style={{ gridColumn: "1 / span 3", gridRow: 3 }}
		// 		>
		// 			<TabPanel />
		// 		</div>
		// 		{/* <div class="grid-item item5">5</div> */}
		// 	</div>
		// </>
	);
};

export default Dashboard;
