import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Chip from "@mui/material/Chip";
import { useEffect, useState } from "react";

function createData(name, stacks, interview, submission, protein, price) {
  return {
    name,
    stacks,
    interview,
    submission,
    price,
    history: [
      {
        sapid: '60004200038',
        gradyear: '2024',
        email: 'grehashah6@gmail.com',
        resume:'https://github.com',
        github:'https://github.com',
        
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
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
        <TableCell align="right">{row.interview}</TableCell>
        <TableCell align="right">{row.submission}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h5" gutterBottom component="div">
               Details
              </Typography>
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
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.sapid}>
                      <TableCell component="th" scope="row">
                        {historyRow.sapid}
                      </TableCell>
                      <TableCell align="right">{historyRow.gradyear}</TableCell>
                      <TableCell align="right">{historyRow.email
                      }</TableCell>
                      <TableCell align="right">{historyRow.resume}</TableCell>
                      <TableCell align="right">{historyRow.github}</TableCell>
                      
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

Row.propTypes = {
  row: PropTypes.shape({
    stacks: PropTypes.number.isRequired,
    submission: PropTypes.number.isRequired,
    interview: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        email
        : PropTypes.string.isRequired,
        gradyear: PropTypes.number.isRequired,
        sapid: PropTypes.number.isRequired,
        resume: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Shrey Parekh',  <Chip
  label="Fullstack "
  color="secondary"
  sx={{ margin: "5px" }}
  onClick={() => {}}
/>
, '6 June', 'Null'),
//   createData('Greha Shah', <Chip
//   label="Frontend "
//   color="secondary"
//   sx={{ margin: "5px" }}
//   onClick={() => {}}
// />, '9 June', 'Null'),
//   createData('Khushi Mehta', <Chip
//   label="Backend "
//   color="secondary"
//   sx={{ margin: "5px" }}
//   onClick={() => {}}
// />, '6 June', 'Null'),
//   createData('Anish Kulkarni', 3,'8 June', 'Null'),
//   createData('Pratham Bhoir', 1, '6 June', 'Null'),
];

export default function CollapsibleTable() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${localStorage.getItem("token")}`);
  
    const [user, setUser] = useState({
      email: "",
      grad_year: "",
      name: "",
      sapid: "",
    });
    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
    
      useEffect(() => {
        fetch(
          "https://unicodeinterview.pythonanywhere.com/accounts/application/",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setUser(result.user);
          })
          .catch((error) => console.log("error", error));
        }, []);
    
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name </TableCell>
            <TableCell align="right">Stacks applied</TableCell>
            <TableCell align="right">Scheduled Interview&nbsp;</TableCell>
            <TableCell align="right">Submission Details&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
