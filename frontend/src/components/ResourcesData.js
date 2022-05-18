import React, { useState, useEffect } from "react";
import { Card, Divider, Grid } from "@mui/material";
import axios from "axios";

const ResourcesData = ( props ) => {
	const [data, setData] = useState([{
        "id":"",
        "name": "",
        "resources": "",
    }]);
	useEffect(() => {

		var config = {
			method: "get",
			url: "https://unicodeinterview.pythonanywhere.com/accounts/resources/",
			headers: {
				Authorization: `Token ${localStorage.getItem("token")}`,
			},
		};
console.log(localStorage.getItem("token"));
		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				setData(response.data.filter(( item) => item.name === props.stack
                ));
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);
    console.log(props.stack);
    console.log(data);
	return (
		<div>
			<Grid>
				{data.map((item) => (
					<>
						<h3 >{item.name === props.stack ? item.name : "" }</h3>
                        <iframe src={item.name === props.stack ? item.resources : "" } width="100%" height="1000px" />
					</>
				))}
			</Grid>
		</div>
	);
};

export default ResourcesData;
