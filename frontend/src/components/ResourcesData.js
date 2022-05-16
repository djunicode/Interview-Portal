import React, { useState, useEffect } from "react";
import { Card, Divider, Grid } from "@mui/material";

const ResourcesData = ( props ) => {
	const [data, setData] = useState([{
        "id":"",
        "name": "",
        "resources": "",
    }]);
	useEffect(() => {
		var axios = require("axios");

		var config = {
			method: "get",
			url: "https://unicodeinterview.pythonanywhere.com/accounts/resources/",
			headers: {
				Authorization: "Token 5cf113a408a69b6acee34213bbd9d41d73613eaa",
			},
		};

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
