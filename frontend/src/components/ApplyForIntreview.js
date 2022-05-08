import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { CardActionArea, Grid } from "@mui/material";
import { classNames } from "muicss/lib/js/lib/util";
const useStyles = makeStyles((theme) => ({
  card1: {
    boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
    borderRadius: "10px!important",
  },
}));

export default function ApplyForIntreview() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className={classes.card1}>
          <CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                mt={1}
                mb={1}
              >
                <strong>Apply for Interview </strong>
                <hr></hr>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                mt={2}
                sx={{ height: "200px" }}
              >
                Application Form not live yet
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
