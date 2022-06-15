import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

function stringToColor(string) {
	let hash = 0;
	let i;

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = "#";

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}
	/* eslint-enable no-bitwise */

	return color;
}

function stringAvatar(name) {
	return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
	};
}

export default function Interviewers() {
	return (
		<Grid container>
			<Grid item sm="12" >
				<Grid style={{ margin: "10px" }}>
					<h3 style={{textAlign:"left"}}>TE Mentors: </h3>
				</Grid>
				<Stack direction="row" spacing={2}>
					<div style={{ margin: "10px" }}>
						<Avatar
							{...stringAvatar("Deap Daru")}
							style={{ margin: "10px" }}
						></Avatar>
						Deap Daru
					</div>
					<div style={{ margin: "10px" }}>
						<Avatar
							{...stringAvatar("Shubh Nisar")}
							style={{ margin: "10px" }}
						></Avatar>
						Shubh Nisar
					</div>
                    <div style={{ margin: "10px" }}>
						<Avatar
							{...stringAvatar("Akshath Mahajan")}
							style={{ margin: "10px" }}
						></Avatar>
						Akshath Mahajan
					</div>
				</Stack>
			</Grid>
			<Grid>
				<div style={{ margin: "10px" }}>
					<h3>BE Mentors: </h3>
				</div>
				<Stack direction="row" spacing={2}>
					<div style={{ margin: "10px" }}>
						<Avatar
							{...stringAvatar("Govind Thakur")}
							style={{ margin: "10px" }}
						></Avatar>
						Govind Thakur
					</div>
				</Stack>
			</Grid>
		</Grid>
	);
}
