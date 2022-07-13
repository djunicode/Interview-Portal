import { Card, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import "../styles/Time.css";

const Time = () => {
  return (
    <Grid container>
      <Card>
        <Typography gutterBottom variant="h5" component="div" mt={1} mb={1}>
          <strong>Apply for Interview </strong>
          <hr></hr>
        </Typography>
        <Grid item md={8}>
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
                            style={{ backgroundColor: "#09c1d7" }}
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
                            style={{ backgroundColor: "#09c1d7" }}
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
                          </div>
                        </div>
                      </div>
                      <div className="timeline">
                        <div className="timeline-content">
                          <div
                            className="circle"
                            style={{ backgroundColor: "#09c1d7" }}
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
                            style={{ backgroundColor: "#09c1d7" }}
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
                          </div>
                        </div>
                      </div>
                      <div className="timeline">
                        <div className="timeline-content">
                          <div
                            className="circle"
                            style={{ backgroundColor: "#09c1d7" }}
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
      </Card>
    </Grid>
  );
};

export default Time;
