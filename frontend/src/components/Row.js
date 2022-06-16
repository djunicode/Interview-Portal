import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.stacks}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="medium" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Sap ID</TableCell>
                    <TableCell align="right">Graduation Year</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Resume Link</TableCell>
                    <TableCell align="right">Github Link</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {historyRow.sapid}
                      </TableCell>
                      <TableCell align="right">{historyRow.gradyear}</TableCell>
                      <TableCell align="right">{historyRow.email}</TableCell>
                      <TableCell align="right">
                        <a
                          href={historyRow.resume}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Resume
                        </a>
                      </TableCell>
                      <TableCell align="right">
                        {historyRow.github.map((githubRow, i) => (
                          <>
                            <a
                              key={i}
                              href={githubRow.repo_link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {githubRow.name}
                            </a>
                            &nbsp; &nbsp;
                          </>
                        ))}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}