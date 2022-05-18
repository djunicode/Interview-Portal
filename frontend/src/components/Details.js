import React from "react";
import { makeStyles } from "@mui/styles";
import { Checkbox, Grid, Input, Typography } from "@mui/material";
import "../styles/signupPage.css";
import { Card } from "@mui/material";
import "../styles/login_signup.css";
// import Panel from "muicss/lib/react/panel";
import { Button } from "@mui/material";
// import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import ChipInput from "material-ui-chip-input";
import resume from "../assets/resume.svg";
import git from "../assets/git.svg";
import stacks from "../assets/stacks.svg";
import TextField from "@material-ui/core/TextField";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

// import Form from 'muicss/lib/react/form';
// import Input from 'muicss/lib/react/input';

const useStyles = makeStyles((theme) => ({
  grad: {
    backgroundColor: "#F2F3F7",
    height: "100vh",
    padding: "0!important",
    justifyContent: "center",
    alignItems: "center",
  },
  card1: {
    display: "flex",
    height: "75vh",
    width: "110vh",
    display: "flex",
    justifyContent: "center",
    padding: "5%",
    borderRadius: "20px!important",
  },
  header: {
    color: theme.palette.primary.main,
  },

  gridRow: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  container: {
    width: "60%!important",
  },
  field: {
    width: "100%",
  },
  bttn: {
    width: "100%",
  },
  formlabel: {
    display: "flex",
  },
}));

const Details = () => {
  const classes = useStyles();

  const [data, setData] = useState([]);

  const getValue = (e) => {
    if (data.includes(e.target.value)) {
      let arr = data.filter((item) => item !== e.target.value);
      setData(arr);
    } else {
      console.log(data.concat(e.target.value));
      setData([...data, e.target.value]);
    }
  };

  return (
    <>
      <Box
        container
        className={classes.grad}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Card className={classes.card1}>
          <Grid container className={classes.container}>
            <Grid item xs={12}>
              <Typography className={classes.header} variant="h2">
                DETAILS
              </Typography>
            </Grid>
            {/* <Grid item><Profile/></Grid> */}
            <Grid item xs={12} className={classes.gridRow}>
              <img src={resume} />
              <Grid item xs={12}>
                <Typography className={classes.formlabel}>Resume</Typography>
                <TextField
                  variant="outlined"
                  // label="Resume Link"
                  className={classes.field}
                />
              </Grid>
            </Grid>
            {/* <Grid item xs={12} className={classes.gridRow}>
              <img src={stacks} />
              <TextField
                variant="outlined"
                label="Stacks"
                className={classes.field}
              />
            </Grid> */}
            <Grid item xs={12} className={classes.gridRow}>
              <Grid item xs={3}>
                <img src={git} />
              </Grid>
              <Grid item xs={9}>
                <Typography className={classes.formlabel}>
                  Github repository link
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.gridRow}>
              <Checkbox
                checked={data.includes("frontend")}
                value="frontend"
                onChange={(e) => {
                  getValue(e);
                }}
              />
              <TextField
                className={classes.field}
                disabled={!data.includes("frontend")}
                label="frontend"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} className={classes.gridRow}>
              <Checkbox
                checked={data.includes("node")}
                value="node"
                onChange={(e) => {
                  getValue(e);
                }}
              />
              <TextField
                className={classes.field}
                disabled={!data.includes("node")}
                label="node"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} className={classes.gridRow}>
              <Checkbox
                checked={data.includes("django")}
                value="django"
                onChange={(e) => {
                  getValue(e);
                }}
              />
              <TextField
                className={classes.field}
                disabled={!data.includes("django")}
                label="django"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} className={classes.gridRow}>
              <Checkbox
                checked={data.includes("app")}
                value="app"
                onChange={(e) => {
                  getValue(e);
                }}
              />
              <TextField
                className={classes.field}
                disabled={!data.includes("app")}
                label="app"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} className={classes.gridRow}>
              <Button variant="contained" className={classes.bttn}>
                Confirm Details
              </Button>
            </Grid>
            <Grid item xs={12} className={classes.gridRow}>
              <Typography>Skip for now {">"} </Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default Details;
