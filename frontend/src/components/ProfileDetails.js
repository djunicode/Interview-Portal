import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  gridRow: {
    display: "flex",
    padding: "2%",
  },
  edit: {
    display: "flex",
    justifyContent: "center",
  },
}));
const ProfileDetails = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [userData, setUserData] = useState("");
  const FetchUserData = () => {
    var data = "";

    var config = {
      method: "get",
      url: "https://unicodeinterview.pythonanywhere.com/accounts/interviewee_update/",
      headers: {
        Authorization: `token ${localStorage.getItem("token")}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setUserData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    FetchUserData();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={12} className={classes.gridRow}>
          <Typography>Check profile Details</Typography>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.gridRow}>
          <Typography>Name:</Typography>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.gridRow}>
          <Typography>{userData && userData.user.name}</Typography>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.gridRow}>
          <Typography>Email:</Typography>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.gridRow}>
          <Typography> {userData && userData.user.email}</Typography>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.gridRow}>
          <Typography>SAP ID:</Typography>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.gridRow}>
          <Typography> {userData && userData.user.sapid}</Typography>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.gridRow}>
          <Typography>Graduation Year:</Typography>
        </Grid>
        <Grid item sm={6} xs={12} className={classes.gridRow}>
          <Typography> {userData && userData.user.grad_year}</Typography>
        </Grid>
        <Grid item xs={12} className={classes.edit}>
          <Button variant="outlined" onClick={() => navigate("/profile")}>
            Edit profile
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileDetails;
