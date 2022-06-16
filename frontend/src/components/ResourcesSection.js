import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, Divider, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SideNavbar from "../components/SideNavbar";
import ProgressCircle from "./ProgressCircle";
import ResourcesData from "./ResourcesData";

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

export default function Resources() {
	const [value, setValue] = useState([]);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const classes = useStyles();

	return (
		<Card className={classes.card1}>
			<Grid container className={classes.flexItem}>
				<Grid item>
					<Typography className={classes.header} variant="h3">
						Resources
					</Typography>
					<Divider className={classes.divider} />
				</Grid>

				<Box 
          sx={{
            flexGrow: 1,
            maxWidth: { xs: 320, sm: 480, md: "100%" },
            bgcolor: "background.paper",
            padding: "1px",
			width: '100%'
          }}
        >
					<Box sx={{ mt: 3 }} className={classes.flexItem}>
						<Grid item>
						<AppBar position="static" color="inherit"  sx={{width:"100%"}}>
							<Tabs
								value={value}
								onChange={handleChange}
								aria-label="basic tabs example"
							>
								<Tab label="Frontend" {...a11yProps(0)} />
								<Tab label="Django" {...a11yProps(1)} />
								<Tab label="Node" {...a11yProps(2)} />
								<Tab label="Flutter" {...a11yProps(3)} />
								<Tab label="React Native" {...a11yProps(4)} />
							</Tabs>
							</AppBar>
						</Grid>
					</Box>
					<TabPanel value={value} index={0}>
						<ResourcesData stack="Frontend" />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<ResourcesData stack="Django" />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<ResourcesData stack="Node" />
					</TabPanel>
					<TabPanel value={value} index={3}>
						<ResourcesData stack="Flutter" />
					</TabPanel>
					<TabPanel value={value} index={4}>
					<ResourcesData stack="ReactNative" />
					</TabPanel>
				</Box>
			</Grid>
		</Card>
	);
}
