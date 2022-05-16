import React, { useEffect, useState} from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	// const [value, setValue] = useState([]);
  // const handleChange = (event, newValue) => {
	// 	setTasks(newValue);
	// };

	const [tasks, setTasks] = useState([]);

	const handleTask = (event, newTask) => {
		setTasks(newTask);
	};

	useEffect(() => {
		var axios = require("axios");

		var config = {
			method: "get",
			url: "https://unicodeinterview.pythonanywhere.com/accounts/tasks/",
			headers: {
				Authorization: "Token a85940fbf0ce66a9df63e8128c0e2290b985ff20",
			},
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
        setTasks(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

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

				<Box sx={{ width: "100%" }}>
					<Box sx={{ borderBottom: 1, borderColor: "divider", mt: 3 }}>
						<Tabs
							value={tasks}
							onChange={handleTask}
							aria-label="basic tabs example"
						>
							<Tab label="Frontend" {...a11yProps(0)} />
							<Tab label="Backend" {...a11yProps(1)} />
							<Tab label="Design" {...a11yProps(2)} />
							<Tab label="App" {...a11yProps(3)} />
						</Tabs>
					</Box>
					<TabPanel value={tasks} index={0}>
						<div className="item-container">
							{tasks.map((task) => (
								<div className="card">
									<h3>{task.task_question}</h3>
									<p>{task.task_description}</p>
								</div>
							))}
						</div>
					</TabPanel>
					<TabPanel value={tasks} index={1}>
						Item Two
					</TabPanel>
					<TabPanel value={tasks} index={2}>
						Item Three
					</TabPanel>
					<TabPanel value={tasks} index={3}>
						Item Four
					</TabPanel>
				</Box>
			</Grid>
		</Card>
	);
}
