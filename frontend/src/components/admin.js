import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import { useEffect, useState, useMemo } from "react";
import { Button, Grid } from "@mui/material";
import Interviewers from "./Interviewers";
import Row from "./Row";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PanelName from "./PanelName";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Outlet, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ScorePage from "../pages/ScorePage";

function createData(name, stacks, history) {
  return {
    name,
    stacks,
    history,
  };
}

const rows = [
  createData(
    "Shrey",
    <Chip label="Fullstack " color="secondary" sx={{ margin: "5px" }} />
  ),
];

export default function CollapsibleTable({ userData, setUserData }) {
  const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
  };

  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClick1 = () => {
    console.log("hi");
  };
  const handleClose = () => {
    setOpen(false);
  };
  var myHeaders = new Headers();

  myHeaders.append("Authorization", `Token ${localStorage.getItem("token")}`);

  const [user, setUser] = useState([
    {
      id: "",
      interviewees: [],
      interviewers: [],
      name: "",
    },
  ]);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      "https://unicodeinterview.pythonanywhere.com/accounts/panel_details/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        //console.log(result);
        setUser(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  console.log(userData);
  return (
    <Grid container>
      <Grid item sm={12}>
        <div style={{ clear: "both" }}>
          <h3 style={{ float: "left", margin: "10px" }}>
            <PanelName />
          </h3>
          <Button
            size="large"
            variant="contained"
            sx={{
              textTransform: "none",
              padding: "5px",
              float: "right",
              margin: "10px",
            }}
          >
            Schedule Interview
          </Button>
        </div>
        <Interviewers data={user} />
      </Grid>
      <Grid item sm={12}>
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Name </TableCell>
                <TableCell align="right">Stacks applied</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {user.map((item, index) => (
                <React.Fragment key={index}>
                  {item.interviewees.map((interviewee, i) => (
                    <React.Fragment key={i}>
                      {rows.map((_, index) => (
                        <Row
                          key={index}
                          value={index}
                          row={createData(
                            interviewee.user.name,
                            interviewee.application.stack.map((obj) => (
                              <>
                                <Chip
                                  label={obj.name}
                                  color="secondary"
                                  sx={{ margin: "5px" }}
                                  onClick={() => {
                                    setUserData(interviewee.user.sapid);
                                    navigate(
                                      `/admin/scorecard/${interviewee.user.sapid}`
                                    );
                                  }}
                                />
                                <Routes>
                                  <Route
                                    path="scorecard/:id"
                                    element={<PrivateRoute />}
                                  >
                                    <Route
                                      path="scorecard/:id"
                                      element={<ScorePage />}
                                    />
                                  </Route>
                                </Routes>
                                <>
                                  {/* <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                  >
                                    <DialogTitle id="alert-dialog-title">
                                      Questions :
                                    </DialogTitle>
                                    <DialogContent>
                                      <DialogContentText id="alert-dialog-description">
                                        Q1. Knowledge about HTML, CSS and
                                        Javascript. Rate it be
                                      </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                      <Button onClick={handleClose}>
                                        Disagree
                                      </Button>
                                      <Button onClick={handleClose} autoFocus>
                                        Agree
                                      </Button>
                                    </DialogActions>
                                  </Dialog> */}
                                </>
                              </>
                            )),
                            [
                              {
                                sapid: interviewee.user.sapid,
                                gradyear: interviewee.user.grad_year,
                                email: interviewee.user.email,
                                resume: interviewee.application.resume_link,
                                github: interviewee.application.stack,
                              },
                            ]
                          )}
                        />
                      ))}
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
