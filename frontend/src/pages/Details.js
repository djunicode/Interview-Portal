import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import "../styles/signupPage.css";
import "../styles/login_signup.css";
// import Panel from "muicss/lib/react/panel";
import { Button } from "@mui/material";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
	grad: {
		backgroundImage: theme.gradient,
		width: "49vw",
		height: "100vh",
		borderRadius: "26px",
		margin: "1%",
		display: "flex",
	},
}));

const Details = () => {
	const classes = useStyles();
	return (
		<>
			<Grid
				container
				style={{
					padding: "15px",
					width: "100vw",
					height: "100vh",
					position: "relative",
				}}
			>
				<Grid
					className={classes.grad}
					item
					style={{
						width: "100%",
						height: "100%",
						borderRadius: "7px",
					}}
				>
					<Grid
						container
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							height: "100%",
						}}
					>
						<Grid
							container
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
								backgroundColor: "#F1F1F1",
								width: { md: "40vw", sm: "60vw", xs: "80vw" },
								padding: "2%",
								borderRadius: "3.5px",
								marginTop: "5%",
							}}
						>
							<Grid
								item
								style={{
									fontWeight: "bold",
									marginBottom: "3%",
									fontSize: "1.5em",
									color: "#8080FF",
								}}
							>
								DETAILS
							</Grid>
							<Grid
								item
								style={{
									width: "100%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Grid
									container
									spacing={3}
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										flexDirection: "column",
										width: "100%",
									}}
								>
									<Grid
										item
										style={{
											width: "100%",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											flexDirection: "column",
											rowGap: "1.5rem",
										}}
									>
										<Grid
											container
											spacing={3}
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												width: "100%",
												flexDirection: "column",
											}}
										>
											<Grid item style={{ width: "100%" }}>
												{/* <TextField
													required
													label="Email"
													id="email"
													name="email"
													// value={list.email}
													autoFocus
													style={{ width: "100%" }}
													// onChange={handleChange}
												/> */}
												<Grid>
													<TextField
														id="outlined-basic"
														label=""
														variant="outlined"
													/>
													<TextField
														id="outlined-basic"
														label=""
														variant="outlined"
													/>
												</Grid>
												<Grid>
													
												</Grid>
											</Grid>
											<Grid item style={{ width: "100%" }}>
												<TextField
													type="password"
													required
													label="Password"
													id="password"
													name="password"
													// value={list.password}
													style={{ width: "100%" }}
													// onChange={handleChange}
												/>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>

							<Grid
								item
								style={{
									width: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								{/* <Link to={'/contactlist'} style={{ width: '50%', marginTop: '2%', background: 'linear-gradient(149.06deg, #E02768 5.36%, #C71C7A 85.52%)', color: 'white', fontWeight: '600', width: '100%', fontSize: '1.1em', display: 'flex', justifyContent: 'center', alignItems: 'center' }} state={personCreds} onClick={handleSubmit}>Sign In</Link> */}
								<Button
									style={{
										width: "87%",
										height: "45px",
										border: "2px solid #8080FF",
										color: "#8080FF",
										marginTop: "2%",
										background: "rgba(128, 128, 255, 0.2)",
										fontWeight: "600",
										fontSize: "1.1em",
									}}
									// onClick={handleSubmit}
								>
									Sign In
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default Details;
