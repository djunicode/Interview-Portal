import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

export default function ApplyForIntreview() {
	return (
		<Grid container>
			<Grid item xs={6} md={6}>
				<Card >
					<CardActionArea>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div" mt={1} mb={1}>
								<strong>Apply for Interview </strong>
								<hr></hr>
							</Typography>
							<Typography variant="body2" color="text.secondary"  mt={2} sx={{height:"200px"}}>
								Application Form not live yet
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		</Grid>
	);
}
