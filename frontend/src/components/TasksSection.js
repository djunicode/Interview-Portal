import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, Divider, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    flexItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    card1: {
      padding: "6%",
    //   height: "28vh",
      boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();

  return (
    <Card className={classes.card1}>
     <Grid container className={classes.flexItem} rowSpacing="20">
      <Grid item>
          <Typography className={classes.header} variant="h3">
            Tasks
           
          </Typography>
          <Divider className={classes.divider} />
        </Grid>
          
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt:3  }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Frontend" {...a11yProps(0)} />
          <Tab label="Backend" {...a11yProps(1)} />
          <Tab label="Design" {...a11yProps(2)} />
          <Tab label="App" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
    </Grid>
    </Card>
  );
}
