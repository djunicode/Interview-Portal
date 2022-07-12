import React from "react";
import ProgressCircle from "../components/ProgressCircle";
import { Card, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  flexItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },

  text1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: " #4F4F4F",
    fontSize: "8px!important",
  },
  [theme.breakpoints.down("sm")]: {
    entireGrid: {
      marginLeft: "-10px!important",
    },
  },

  card1: {
    padding: "1%",
    boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
    borderRadius: "10px!important",
    paddingTop: "6%",
    paddingBottom: "6%",
  },
}));
const ProfileProgress = (props) => {
  console.log(props.value);
  const classes = useStyles();
  return (
    <Card className={classes.card1}>
      <Grid container className={classes.entireGrid} spacing={2}>
        <Grid item xs={2} className={classes.flexItem}>
          <ProgressCircle />
        </Grid>
        <Grid item xs={10}>
          <Typography>
            Your profile is still 80% incomplete. <br/> Complete your profile now
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ProfileProgress;
