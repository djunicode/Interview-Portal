import React, { useState, useEffect } from "react";
import { Card, Divider, Grid } from "@mui/material";
import axios from "axios";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

const ResourcesData = (props) => {
	const theme = useTheme();
	const [data, setData] = useState([
		{
			id: "",
			task_question: "",
			task_description: "",
			task_resources: "",
			stack: "",
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
		console.log(localStorage.getItem("token"));
		axios(config)
			.then(function (response) {
				console.log(response.data[0].stack);
				setData(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);
	console.log(props.stack);
	console.log(data);
	// console.log(data[0].stack);
	return (
		<div>
			<Grid>
				{data.map((item) => (
					<>
						<Card sx={{ display: "flex", mb:5, boxShadow:" inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em rgba(0,0,0,0.3)" } }>
							<Box
								sx={{
									width: 81,
									height: 80,
									borderRadius: 50,
									backgroundColor: "#8985f2",
									textAlign: "center",
									verticalAlign: "center",
									mt: 2,
									ml: 2,
								}}
							>
								<Typography
									component="div"
									variant="h2"
									sx={{
										color: "white",
										width: 80,
										height: 80,
										borderRadius: 50,
										mt: 2,
									}}
								>
									{item.stack === props.stack ? item.id : "01"}
								</Typography>
							</Box>
							<Box sx={{ display: "flex", flexDirection: "column" }}>
								<CardContent sx={{ flex: "1 0 auto" }}>
									<Typography variant="h5" sx={{textAlign:"left"}}>
										{item.stack === props.stack ? item.task_question : "Question"}
									</Typography>
									<Typography
										variant="subtitle1"
										color="text.secondary"
										component="div"
										sx={{textAlign:"left"}}
									>
										{item.stack === props.stack ? item.task_description : "Desc"}
									</Typography>
								</CardContent>
							</Box>
						</Card>
						{/* <h3>{item.stack === props.stack ? item.task_description : "hi"}</h3> */}
					</>
				))}
			</Grid>
		</div>
	);
};

export default ResourcesData;
