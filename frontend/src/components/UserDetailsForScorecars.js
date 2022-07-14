import React from "react";
import axios from "axios";
import { Button, collapseClasses, Grid, Typography } from "@mui/material";
import { Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const useStyles = makeStyles((theme) => ({
  gridRow: {
    display: "flex",
    width: "50%!important",
    padding: "2%",
  },
  titleGridRow: {
    display: "flex",
    padding: "2%",
    justifyContent: "center",
  },
  edit: {
    display: "flex",
    justifyContent: "center",
  },
  userCard: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5%",
  },
  outerdiv: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.background,
  },
  content: {
    width: "75%",
    justifyContent: "center",
    padding: "3%",
  },
}));
const UserDetailsForScorecars = () => {
  const classes = useStyles();
  const { id } = useParams();
  // console.log(id);
  const [data, setData] = useState([]);
  const Fetchdata = () => {
    var config = {
      method: "get",
      url: `https://unicodeinterview.pythonanywhere.com/accounts/interviewee_get/${id}`,
      headers: {
        Authorization: `token ${localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        //console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    Fetchdata();
  }, []);
  // console.log(data.user.name);
  return (
    <div className={classes.outerdiv}>
      <Card className={classes.userCard}>
        <div className={classes.content}>
          <Grid container>
            <Grid item xs={12} className={classes.titleGridRow}>
              <Typography variant="h3">
                {data.user && data.user.name}
              </Typography>
            </Grid>
            <Grid item sm={6} xs={12} className={classes.gridRow}>
              <Typography>Email:</Typography>
            </Grid>
            <Grid item sm={6} xs={12} className={classes.gridRow}>
              <Typography> {data.user && data.user.email}</Typography>
            </Grid>
            <Grid item sm={6} xs={12} className={classes.gridRow}>
              <Typography>SAP ID:</Typography>
            </Grid>
            <Grid item sm={6} xs={12} className={classes.gridRow}>
              <Typography> {data.user && data.user.sapid}</Typography>
            </Grid>
            <Grid item sm={6} xs={12} className={classes.gridRow}>
              <Typography>Graduation Year:</Typography>
            </Grid>
            <Grid item sm={6} xs={12} className={classes.gridRow}>
              <Typography> {data.user && data.user.grad_year}</Typography>
            </Grid>
            <Grid item sm={6} xs={12} className={classes.gridRow}>
              <Typography>Resume link:</Typography>
            </Grid>
            <Grid item sm={6} xs={12} className={classes.gridRow}>
              <Typography>
                <a href={data.application && data.application.resume_link}>
                  {data.application && data.application.resume_link}
                </a>
              </Typography>
            </Grid>
            {data.application &&
              data.application.stack.map((item) => {
                return (
                  <React.Fragment key={item.name}>
                    <Grid item sm={6} xs={12} className={classes.gridRow}>
                      <Typography> {item.name}</Typography>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.gridRow}>
                      <Typography>
                        <a href={item.repo_link}>{item.repo_link}</a>
                      </Typography>
                    </Grid>
                  </React.Fragment>
                );
              })}
          </Grid>
        </div>
      </Card>
    </div>
  );
};

export default UserDetailsForScorecars;
