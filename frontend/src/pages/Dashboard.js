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
import TabPanel from "../components/TasksSection";
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
    height: "120vh",
  },
  rowone: {},
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container columnSpacing={5} className={classes.flexItem}>
        <Grid item md={5} xs={10}>
          <Grid item xs={10} lg={12} md={5} mt={3}>
            <ProfileProgress />
          </Grid>
          <Grid item xs={10} lg={12} md={5} mt={7}>
            <InterviewScheduleCard />
          </Grid>
        </Grid>
        <Grid item xs={10} md={5} xs={10} mt={3}>
          <TimeLine />
        </Grid>
        {/* <Grid item md={3} xs={12} mt={3}>
          <ApplyForIntreview />
        </Grid> */}
        <Grid item md={11} xs={12} mt={3}>
          <TabPanel />
        </Grid>
      </Grid>
      {/* </Grid> */}
    </>
  );
};

export default Dashboard;
