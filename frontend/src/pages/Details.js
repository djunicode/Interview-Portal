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
    backgroundImage: theme.gradient,
    height: "100vh",

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
  const [tick, setTick] = useState("false");
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const handleChange = () => {
    setTick((tick) => (tick === "false" ? "true" : "false"));
  };
  const getValue = (e) => {
    console.log(data.map((items) => items));
    console.log(e.target.value);
    console.log(data.includes(e.target.value));
    data.map((item) => console.log(e.target.value == item));
    if (data.includes(e.target.value)) {
      let index = data.indexOf(e.target.value);
      console.log(index);
      setData([data.filter((item) => item !== e.target.value)]);
    } else {
      console.log([...data, e.target.value]);
      setData([...data, e.target.value]);
    }
  };
  console.log(data);
  // useEffect(() => {
  //   handleChange();
  // }, []);
  console.log(tick);
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
                tick={tick}
                value="frontend"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <TextField
                className={classes.field}
                disabled={tick === "true" ? true : false}
                label="frontend"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} className={classes.gridRow}>
              <Checkbox tick={tick} value="node" onChange={handleChange} />
              <TextField
                className={classes.field}
                disabled={tick ? true : false}
                label="node"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} className={classes.gridRow}>
              <Checkbox tick={tick} value="django" onChange={handleChange} />
              <TextField
                className={classes.field}
                disabled={tick ? true : false}
                label="django"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} className={classes.gridRow}>
              <Checkbox
                tick={tick}
                value="app"
                onChange={(e) => {
                  getValue(e);
                  handleChange();
                }}
              />
              <TextField
                className={classes.field}
                disabled={tick ? true : false}
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
