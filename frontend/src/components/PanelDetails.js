import React, { Fragment } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Row from "./Row";
import { Route, Routes } from "react-router";
import { Outlet, Navigate } from "react-router-dom";
import Chip from "@mui/material/Chip";
import { Grid } from "@mui/material";
import ScorePage from "../pages/ScorePage";
import { useNavigate } from "react-router-dom";

export default function PanelDetails(props) {

  const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    return token ? <Outlet /> : <Navigate to="/login" />;
  };

  function createData(name, stacks, history) {
    return {
      name,
      stacks,
      history,
    };
  }

  const navigate = useNavigate();

  const rows = [
    createData(
      "Shrey",
      <Chip label="Fullstack " color="secondary" sx={{ margin: "5px" }} />
    ),
  ];

  return (
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
            {props.user.map((item, index) => (
              <React.Fragment key={index}>
                {item.interviewees.map((interviewee, i) => (
                  <React.Fragment key={i}>
                    {rows.map((_, index) => (
                      <Row
                        key={index}
                        value={index}
                        row={createData(
                          interviewee.user.name ? interviewee.user.name : "",
                          interviewee.application.stack.map((obj, i) => (
                            <Fragment key={i}>
                              <Chip
                                label={obj.name}
                                color="secondary"
                                sx={{ margin: "5px" }}
                                onClick={() => {
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
                            </Fragment>
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
  );
}
