import { Divider, Grid } from "@mui/material";
import React from "react";
import "../../styles/Time.css";

const Time = () => {
	return (
		<Grid container>
			<div>
				<h1> Timeline </h1>
				<Divider style={{ width: "100%" }} />
			</div>
			<Grid item>
				<div>
					<section>
						<div className="container py-5">
							<div className="row">
								<div className="col-md-12">
									<div className="main-timeline">
										<div className="timeline">
											<div className="timeline-content">
												<div
													className="circle"
													style={{ backgroundColor: "#8985f2" }}
												>
													<h1
														style={{
															margin: "0 auto",
															lineHeight: "180px",
															fontWeight: "bolder",
														}}
													>
														02 MAY
													</h1>
													{/* <span className="homebox"> </span> */}
												</div>
												<div className="content">
													<h1 className="">Tasks will be Assigned </h1>
												</div>
											</div>
										</div>
										<div className="timeline">
											<div className="timeline-content">
												<div
													className="circle"
													style={{ backgroundColor: "#8985f2" }}
												>
													<h1
														style={{
															margin: "0 auto",
															lineHeight: "180px",
															fontWeight: "bolder",
														}}
													>
														18 MAY
													</h1>
													{/* <span className="homebox"></span> */}
												</div>
												<div className="content">
													<h1 className="">Application form will be Live </h1>

													<p className="description">
														{/* Tristique senectus et netus et malesuada fames. Sit amet consectetur adipiscing elit pellentesque. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Erat nam at lectus urna duis convallis. Eget aliquet nibh praesent tristique magna. Interdum posuere lorem ipsum dolor sit amet. Elementum tempus egestas sed sed risus pretium quam. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. */}
													</p>
												</div>
											</div>
										</div>
										<div className="timeline">
											<div className="timeline-content">
												<div
													className="circle"
													style={{ backgroundColor: "#8985f2" }}
												>
													<h1
														style={{
															margin: "0 auto",
															lineHeight: "180px",
															fontWeight: "bolder",
														}}
													>
														28 MAY
													</h1>
												</div>
												<div className="content">
													<h1 className="">Last day for Registration </h1>
												</div>
											</div>
										</div>
										<div className="timeline">
											<div className="timeline-content">
												<div
													className="circle"
													style={{ backgroundColor: "#8985f2" }}
												>
													<h1
														style={{
															margin: "0 auto",
															lineHeight: "180px",
															fontWeight: "bolder",
														}}
													>
														05 JUNE
													</h1>
												</div>
												<div className="content">
													<h1 className="">Interview Round begins </h1>

													<p className="description">
														{/* Tristique senectus et netus et malesuada fames. Sit amet consectetur adipiscing elit pellentesque. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Erat nam at lectus urna duis convallis. Eget aliquet nibh praesent tristique magna. Interdum posuere lorem ipsum dolor sit amet. Elementum tempus egestas sed sed risus pretium quam. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. */}
													</p>
												</div>
											</div>
										</div>
										<div className="timeline">
											<div className="timeline-content">
												<div
													className="circle"
													style={{ backgroundColor: "#8985f2" }}
												>
													<h1
														style={{
															margin: "0 auto",
															lineHeight: "180px",
															fontWeight: "bolder",
														}}
													>
														24 JUNE
													</h1>
												</div>
												<div className="content">
													<h1 className="">Results </h1>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</Grid>
		</Grid>
	);
};

export default Time;
