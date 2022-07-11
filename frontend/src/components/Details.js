import { useState, useEffect } from "react";
import React from "react";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import { Checkbox, Grid, Input, Typography } from "@mui/material";
import "../styles/signupPage.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Card } from "@mui/material";
import { useFormik, yupToFormErrors } from "formik";
import ProfileDetails from "./ProfileDetails";
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
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  grad: {
    backgroundColor: "#F2F3F7",
    height: "100%",
    padding: "0!important",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      height: "30px",
    },
  },
  card1: {
    display: "flex",
    // height: "75%",
    width: "110vh",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20%",
      marginRight: "5%",
    },
    [theme.breakpoints.up("xs")]: {
      marginTop: "5%",
      marginBottom: "5%",
    },
    display: "flex",
    justifyContent: "center",

    padding: "3%",
    borderRadius: "20px!important",
  },
  header: {
    color: theme.palette.primary.main,
  },
  labelRow: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "2%",
  },
  gridRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2%",
  },
  skip: {
    color: "rgba(81, 84, 206, 1)",
    textDecoration: "none!important",
  },
  container: {
    width: "60%!important",
    [theme.breakpoints.between("sm", "md")]: {
      width: "80%!important",
    },
    [theme.breakpoints.between("xs", "sm")]: {
      width: "90%!important",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%!important",
    },
  },
  field: {
    width: "100%",
  },
  bttn: {
    width: "100%",
  },
  formlabel: {
    display: "flex",
    marginLeft: "5%!important",
    fontSize: "20px!important",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10%!important",
      fontSize: "16px!important",
    },
  },
  error: {
    display: "flex",
    color: theme.palette.error.main,
    marginLeft: "10%",
  },
  resumeField: {
    width: "92.5%",
    marginLeft: "7.5%",
  },
}));

const Details = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const [openError, setOpenError] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      resume: "",
      frontend: "",
      node: "",
      django: "",
      flutter: "",
      fullStackDjango: "",
      reactNative: "",
      fullStackNode: "",
      stacks: [],
    },
    validationSchema: Yup.object().shape({
      resume: Yup.string().required("Required"),
      stacks: Yup.array().min(1, "select atleast one stack"),
      frontend: Yup.string().when("stacks", (stacks) => {
        if (stacks.includes("frontend"))
          return Yup.string().required("Required");
      }),
      node: Yup.string().when("stacks", (stacks) => {
        if (stacks.includes("node")) return Yup.string().required("Required");
      }),
      flutter: Yup.string().when("stacks", (stacks) => {
        if (stacks.includes("flutter"))
          return Yup.string().required("Required");
      }),
      django: Yup.string().when("stacks", (stacks) => {
        if (stacks.includes("django")) return Yup.string().required("Required");
      }),
      fullStackDjango: Yup.string().when("stacks", (stacks) => {
        if (stacks.includes("fullStackDjango"))
          return Yup.string().required("Required");
      }),
      reactNative: Yup.string().when("stacks", (stacks) => {
        if (stacks.includes("reactNative"))
          return Yup.string().required("Required");
      }),
      fullStackNode: Yup.string().when("stacks", (stacks) => {
        if (stacks.includes("fullStackNode"))
          return Yup.string().required("Required");
      }),
    }),
    onSubmit: (values) => {
      let stack = [
        {
          name: "Frontend",
          repo_link: values.frontend,
        },
        {
          name: "Node",
          repo_link: values.node,
        },
        {
          name: "Django",
          repo_link: values.django,
        },
        {
          name: "Flutter",
          repo_link: values.flutter,
        },

        {
          name: "Fullstack Django",
          repo_link: values.fullStackDjango,
        },
        {
          name: "React Native",
          repo_link: values.reactNative,
        },
        {
          name: "Fullstack Node",
          repo_link: values.fullStackNode,
        },
      ];

      let stackArray = stack.filter(
        (singleStack) => singleStack.repo_link !== ""
      );
      console.log(stackArray);
      var data = JSON.stringify({
        stack: stackArray,
        resume_link: values.resume,
      });
      console.log(data);
      var config = {
        method: "post",
        url: "https://unicodeinterview.pythonanywhere.com/accounts/application/",
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));

          setOpen(true);
        })
        .catch(function (error) {
          console.log(error);
          setOpenError(true);
          console.log(openError);
        });
    },
  });
  const handleClose = () => {
    setOpen(false);
    setOpenError(false);
  };

  const getValue = (e) => {
    if (data.includes(e)) {
      console.log(e);
      let arr = data.filter((item) => item !== e);
      setData(arr);
    } else {
      console.log(e);
      console.log(data.concat(e));
      setData([...data, e]);
    }
  };
  console.log(openError);
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
              <Typography className={classes.header} variant="h3">
                Application Form
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ProfileDetails />
            </Grid>
            <Grid item xs={12} className={classes.gridRow}>
              <Grid item xs={1}>
                <img src={resume} className={classes.icon} />
              </Grid>
              <Grid item xs={11}>
                <Typography className={classes.formlabel}>Resume</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.gridRow}>
              <Grid item xs={12}>
                <TextField
                  id="resume"
                  name="resume"
                  helperText={
                    formik.touched.resume && formik.errors.resume
                      ? formik.errors.resume
                      : null
                  }
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.resume}
                  variant="outlined"
                  className={classes.resumeField}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.gridRow}>
              <Grid item xs={1}>
                <img src={git} className={classes.icon} />
              </Grid>
              <Grid item xs={11}>
                <Typography className={classes.formlabel}>
                  Github repository link
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.gridRow}>
              <Checkbox
                checked={formik.values.stacks.includes("frontend")}
                name="stacks"
                value="frontend"
                onChange={(e) => {
                  getValue(e.target.value);
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
              />

              <TextField
                className={classes.field}
                disabled={!formik.values.stacks.includes("frontend")}
                helperText={
                  formik.touched.frontend && formik.errors.frontend
                    ? formik.errors.frontend
                    : null
                }
                label="frontend"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.frontend}
                variant="outlined"
                id="frontend"
                name="frontend"
              />
            </Grid>

            <Grid item xs={12} className={classes.gridRow}>
              <Checkbox
                name="stacks"
                value="node"
                onBlur={formik.handleBlur}
                checked={formik.values.stacks.includes("node")}
                onChange={(e) => {
                  getValue(e.target.value);
                  formik.handleChange(e);
                }}
              />
              <TextField
                className={classes.field}
                disabled={!formik.values.stacks.includes("node")}
                label="node"
                helperText={
                  formik.touched.node && formik.errors.node
                    ? formik.errors.node
                    : null
                }
                variant="outlined"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.node}
                id="node"
                name="node"
              />
            </Grid>

            <Grid item xs={12} className={classes.gridRow}>
              <Checkbox
                name="stacks"
                onBlur={formik.handleBlur}
                checked={formik.values.stacks.includes("django")}
                value="django"
                onChange={(e) => {
                  getValue(e.target.value);
                  formik.handleChange(e);
                }}
              />
              <TextField
                className={classes.field}
                disabled={!formik.values.stacks.includes("django")}
                label="django"
                helperText={
                  formik.touched.django && formik.errors.django
                    ? formik.errors.django
                    : null
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.django}
                variant="outlined"
                id="django"
                name="django"
              />
            </Grid>

            <Grid item xs={12} className={classes.gridRow}>
              <Checkbox
                name="stacks"
                checked={formik.values.stacks.includes("flutter")}
                value="flutter"
                onBlur={formik.handleBlur}
                onChange={(e) => {
                  getValue(e.target.value);
                  formik.handleChange(e);
                }}
              />
              <TextField
                className={classes.field}
                disabled={!formik.values.stacks.includes("flutter")}
                label="Flutter"
                helperText={
                  formik.touched.flutter && formik.errors.flutter
                    ? formik.errors.flutter
                    : null
                }
                onChange={formik.handleChange}
                variant="outlined"
                onBlur={formik.handleBlur}
                value={formik.values.flutter}
                id="flutter"
                name="flutter"
              />
            </Grid>

            <Grid item xs={12} className={classes.gridRow}>
              <Checkbox
                checked={formik.values.stacks.includes("reactNative")}
                name="stacks"
                value="reactNative"
                onChange={(e) => {
                  getValue(e.target.value);
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
              />

              <TextField
                className={classes.field}
                disabled={!formik.values.stacks.includes("reactNative")}
                helperText={
                  formik.touched.reactNative && formik.errors.reactNative
                    ? formik.errors.reactNative
                    : null
                }
                label="React Native"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.reactNative}
                variant="outlined"
                id="reactNative"
                name="reactNative"
              />
            </Grid>

            <Grid item xs={12} className={classes.gridRow}>
              <Checkbox
                checked={formik.values.stacks.includes("fullStackNode")}
                name="stacks"
                value="fullStackNode"
                onChange={(e) => {
                  getValue(e.target.value);
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
              />

              <TextField
                className={classes.field}
                disabled={!formik.values.stacks.includes("fullStackNode")}
                helperText={
                  formik.touched.fullStackNode && formik.errors.fullStackNode
                    ? formik.errors.fullStackNode
                    : null
                }
                label="Fullstack Node"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullStackNode}
                variant="outlined"
                id="fullStackNode"
                name="fullStackNode"
              />
            </Grid>

            <Grid item xs={12} className={classes.gridRow}>
              <Checkbox
                checked={formik.values.stacks.includes("fullStackDjango")}
                name="stacks"
                value="fullStackDjango"
                onChange={(e) => {
                  getValue(e.target.value);
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
              />
              <TextField
                className={classes.field}
                disabled={!formik.values.stacks.includes("fullStackDjango")}
                helperText={
                  formik.touched.fullStackDjango &&
                  formik.errors.fullStackDjango
                    ? formik.errors.fullStackDjango
                    : null
                }
                label="Fullstack Django"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullStackDjango}
                variant="outlined"
                id="fullStackDjango"
                name="fullStackDjango"
              />
            </Grid>

            <Grid item xs={12} className={classes.gridRow}>
              <Button
                variant="contained"
                className={classes.bttn}
                type="submit"
                onClick={formik.handleSubmit}
                // disabled={submitted}
              >
                Confirm Details
              </Button>
            </Grid>
            <Grid item xs={12} className={classes.gridRow}>
              <Typography>
                <Link to="/dashboard" className={classes.skip}>
                  Skip for now {">"}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Card>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            severity="success"
            onClose={handleClose}
            sx={{ width: "100%" }}
          >
            Form submitted successfully!
          </Alert>
        </Snackbar>
        <Snackbar
          open={openError}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert severity="error" onClose={handleClose} sx={{ width: "100%" }}>
            You can submit the form only once!
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default Details;
