import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import axios from "axios";

const ResourcesData = (props) => {
	const [data, setData] = useState([
		{
			id: "",
			name: "",
			resources: "",
		},
	]);
	useEffect(() => {
		var config = {
			method: "get",
			url: "https://unicodeinterview.pythonanywhere.com/accounts/resources/",
			headers: {
				Authorization: `Token ${localStorage.getItem("token")}`,
			},
		};
		axios(config)
			.then(function (response) {
				setData(response.data.filter((item) => item.name === props.stack));
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);
	return (
		<>
			<Grid>
				{data.map((item, i) => (
					<React.Fragment key={i}>
						<span>{item.name === props.stack ? item.name : ""}</span>
						<iframe
							src={item.name === props.stack ? item.resources : ""}
							width="100%"
							height="1000px"
						/>
					</React.Fragment>
				))}
			</Grid>
		</>
	);
};

export default ResourcesData;
