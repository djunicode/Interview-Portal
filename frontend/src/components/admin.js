import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import Interviewers from "./Interviewers";
import Row from "./Row";

function createData(name, stacks, history) {
  return {
    name,
    stacks,
    history
  };
}

const rows = [
  createData(
    "Shrey",
    <Chip
      label="Fullstack "
      color="secondary"
      sx={{ margin: "5px" }}
      onClick={() => {}}
    />
  ),
];

export default function CollapsibleTable() {
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
        console.log(result);
        setUser(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <Grid container>
      <Grid item sm="12">
        <div style={{ clear: "both" }}>
          <h3 style={{ float: "left", margin: "10px" }}>
            <u>Panel Alpha </u>
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
      <Grid item sm="12">
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
                      {rows.map((i) => (
                        <Row
                          key={i}
                          row={createData(
                            interviewee.user.name,
                            interviewee.application.stack.map((obj)=>
                            <Chip
                              label={obj.name}
                              color="secondary"
                              sx={{ margin: "5px" }}
                              onClick={() => {}}
                            />),
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