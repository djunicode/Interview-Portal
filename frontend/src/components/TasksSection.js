import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, Divider, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import TaskData from "./TaskData";

const useStyles = makeStyles((theme) => ({
  flexItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  card1: {
    padding: "6%",
    //   height: "28vh",
    // boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
    borderRadius: "10px!important",
  },
  divider: {
    width: "100%",
  },
  header: {
    display: "flex",
    //   justifyContent: "flex-start",
  },
  text: {
    fontSize: "14px!important",
  },
  scrollButtons: {
    "&.Mui-disabled": {
      opacity: 0.3,
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();

  return (
    <Card className={classes.card1}>
      {/* <Grid container className={classes.flexItem} > */}
      <Grid item xs="5" md="6">
        <Typography className={classes.header} variant="h3">
          <strong>Tasks</strong>
        </Typography>
      </Grid>
      <Divider className={classes.divider} />

      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: 320, sm: 480, md: "100%" },
          bgcolor: "background.paper",
          padding: "1px",
          width: "100%",
        }}
      >
        {/* <Box sx={{ mt: 3 }} className={classes.flexItem}> */}
        <Grid item sx={{ mt: 3, ml: "5%", mr: "5%" }} md="12">
          <AppBar position="static" color="inherit" sx={{ width: "100%" }}>
            <Tabs
              variant="scrollable"
              allowScrollButtonsMobile
              value={value}
              onChange={handleChange}
              classes={classes}
              aria-label="simple tabs example"
            >
              <Tab label="Frontend" {...a11yProps(0)} />
              <Tab label="Backend" {...a11yProps(1)} />
              <Tab label="Design" {...a11yProps(2)} />
              <Tab label="App" {...a11yProps(3)} />
              <Tab label="Git Basics" {...a11yProps(4)} />
            </Tabs>
          </AppBar>
        </Grid>
        {/* </Box> */}
        <Grid sx={{ padding: { xs: 2, md: 0 } }}>
          <TabPanel value={value} index={0}>
            <TaskData stack="1" />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item 2
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item 3
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item 4
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item 5
          </TabPanel>
        </Grid>
      </Box>
      {/* </Grid> */}
    </Card>
  );
}
