import { useState, useEffect } from "react";
import React from "react";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import { Checkbox, Grid, Input, Typography } from "@mui/material";
import "../styles/signupPage.css";
import { Card } from "@mui/material";
import { useFormik } from "formik";
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
    // height: "75vh",
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
    padding: "2%",
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
  error: {
    display: "flex",
    color: theme.palette.error.main,
    marginLeft: "10%",
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
  const formik = useFormik({
    initialValues: {
      resume: "",
      frontend: "",
      node: "",
      django: "",
      app: "",
    },
    validationSchema: Yup.object({
      resume: Yup.string().required("Required"),
      //frontend: Yup.string().required("Required"),
      // node: Yup.string().required("Required"),
      // django: Yup.string().required("Required"),
      // app: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      var axios = import("axios");
      var data = JSON.stringify({
        stack: [
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
            repo_link: values.app,
          },
        ],
        resume_link: values.resume,
      });
      console.log(data);
      var config = {
        method: "post",
        url: "https://unicodeinterview.pythonanywhere.com/accounts/application/",
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Cookie:
            "csrftoken=lYS6Ws57155J4Ki9iYZz1x2w0PpUe2Sr4mb8R44e1lgymx2kHYNywUJX8bubAK9C",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });
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
                Application Form
              </Typography>
            </Grid>
            {/* <Grid item>
              <ProfileDetails />
            </Grid> */}
            <Grid item xs={12} className={classes.gridRow}>
              <img src={resume} />
              <Grid item xs={12}>
                <Typography className={classes.formlabel}>Resume</Typography>
                <TextField
                  id="resume"
                  name="resume"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.resume}
                  variant="outlined"
                  className={classes.field}
                />
                <Grid item xs={12}>
                  {formik.touched.resume && formik.errors.resume ? (
                    <p className={classes.error}>{formik.errors.resume}</p>
                  ) : null}
                </Grid>
              </Grid>
            </Grid>
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.frontend}
                variant="outlined"
                id="frontend"
                name="frontend"
              />
            </Grid>
            <Grid item xs={12}>
              {formik.touched.frontend && formik.errors.frontend ? (
                <p className={classes.error}>{formik.errors.frontend}</p>
              ) : null}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.node}
                id="node"
                name="node"
              />
            </Grid>
            <Grid item xs={12}>
              {formik.touched.node && formik.errors.node ? (
                <p className={classes.error}>{formik.errors.node}</p>
              ) : null}
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.django}
                variant="outlined"
                id="django"
                node="django"
              />
            </Grid>
            <Grid item xs={12}>
              {formik.touched.django && formik.errors.django ? (
                <p className={classes.error}>{formik.errors.django}</p>
              ) : null}
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
                onChange={formik.handleChange}
                variant="outlined"
                onBlur={formik.handleBlur}
                value={formik.values.app}
                id="app"
                name="app"
              />
            </Grid>
            <Grid item xs={12}>
              {formik.touched.app && formik.errors.app ? (
                <p className={classes.error}>{formik.errors.app}</p>
              ) : null}
            </Grid>
            <Grid item xs={12} className={classes.gridRow}>
              <Button
                variant="contained"
                className={classes.bttn}
                type="submit"
                onClick={formik.handleSubmit}
              >
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
