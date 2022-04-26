import { Card, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  flexItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  card1: {
    width: "30%",
    padding: "3%",
    height: "28vh",
  },
  divider: {
    width: "100%",
  },
}));

const InterviewScheduleCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card1}>
      <Grid container className={classes.flexItem} rowSpacing="20">
        <Grid item xs={12}>
          <Typography className={classes.header} variant="h3">
            Interview
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Not yet scheduled will notify you when it is scheduled
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default InterviewScheduleCard;
