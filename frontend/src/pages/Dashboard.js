import React from "react";
import SideNavbar from "../components/SideNavbar";
import ProfileProgress from "../components/ProfileProgress";
import InterviewScheduleCard from "../components/InterviewScheduleCard";
import Time from "../components/Time";
import { makeStyles } from "@mui/styles";
import ApplyForIntreview from "../components/ApplyForIntreview";
import Tasks from "../components/Tasks";
import { Grid } from "@mui/material";
import TimeLine from "../components/Timeline";
const useStyles = makeStyles((theme) => ({
  flexItem: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      marginLeft: "40px!important",
    },
  },
  background: {
    backgroundColor: "#F2F3F7",
    height: "100vh",
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container columnSpacing={5} className={classes.flexItem}>
        <Grid item md={3} xs={12}>
          <Grid item xs={12} mt={3}>
            <ProfileProgress />
          </Grid>
          <Grid item lg={12} mt={7}>
            <InterviewScheduleCard />
          </Grid>
        </Grid>
        <Grid item md={3} xs={12} mt={3}>
          <TimeLine />
        </Grid>
        <Grid item md={3} xs={12} mt={3}>
          <ApplyForIntreview />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
