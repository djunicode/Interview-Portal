import React, { useState, useEffect } from "react";
import { Card, Divider, Grid } from "@mui/material";
import axios from "axios";

const TaskData = (props) => {
	const [data, setData] = useState([
		{
			id: "",
			task_question: "",
			task_description: "",
			task_resources: "",
		},
	]);
	useEffect(() => {
		var config = {
			method: "get",
			url: "https://unicodeinterview.pythonanywhere.com/accounts/tasks/",
			headers: {
				Authorization: `Token ${localStorage.getItem("token")}`,
			},
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				setData(JSON.stringify(response.data));
				// setData(
				// 	response.data.filter((item) => item.task_question === props.stack)
				// );
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	// console.log(props.stack);
	console.log(data);
	return (
		<div>
			<Grid>HI</Grid>
		</div>
	);
};

export default TaskData;
