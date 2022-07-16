import React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { Grid } from "@mui/material";
import { ClassNames } from "@emotion/react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  submitbttn: {
    display: "flex",
    justifyContent: "center",
  },
  questioncard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",

    margin: "5%",
  },
  gridcontainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3%",
    width: "75%",
  },
  outerdiv: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.background,
  },
  field: {
    width: "60%",
  },
  gridRow: {
    justifyContent: "center",
    display: "flex",
  },
}));
const Question_Cards = ({ name }) => {
  const classes = useStyles();
  const { id } = useParams();
  const [questionNo, setQuestionNo] = useState("");
  const formik = useFormik({
    initialValues: {
      sapid: id,
      stack: name,
      question_no: questionNo,
      rating: "",
    },
    validationSchema: Yup.object({
      rating: Yup.string().required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
      var axios = require("axios");
      var data = JSON.stringify({
        sapid: values.sapid,
        stack: values.stack,
        question_no: questionNo,
        rating: values.rating,
      });
      console.log(data);
      var config = {
        method: "post",
        url: "https://unicodeinterview.pythonanywhere.com/accounts/score/",
        headers: {
          Authorization: `token ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

  const [data, setData] = useState([
    {
      id: "",
      stack: "",
      name: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      option5: "",
    },
  ]);
  const FetchFormDetails = (name) => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `http://unicodeinterview.pythonanywhere.com/accounts/question/${name}`,

      headers: {
        Authorization: "Token 326df56cc1dead3780f266523cccc60071096f48",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    FetchFormDetails(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateQID = (qid) => {
    setQuestionNo(qid);
  };

  useEffect(() => {
    updateQID(questionNo);
  }, [questionNo]);
  return (
    <>
      <Box className={classes.outerdiv}>
        <Card variant="outlined" className={classes.questioncard}>
          <Grid container className={classes.gridcontainer}>
            <Grid item xs={12} className={classes.titleGridRow}>
              <CardContent>
                <Typography sx={{ fontSize: 24 }} color="text.primary">
                  {name}
                </Typography>
              </CardContent>
            </Grid>
            {data &&
              data.map((item, index) => {
                return (
                  <>
                    <FormControl>
                      <Grid item xs={12} className={classes.gridRow}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="1"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            name="rating"
                            control={<Radio />}
                            label={item.option1}
                          />
                          <FormControlLabel
                            value="2"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            name="rating"
                            control={<Radio />}
                            label={item.option2}
                          />
                          <FormControlLabel
                            value="3"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            name="rating"
                            control={<Radio />}
                            label={item.option3}
                          />
                          <FormControlLabel
                            value="4"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            name="rating"
                            control={<Radio />}
                            label={item.option4}
                          />
                          <FormControlLabel
                            value="5"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            name="rating"
                            control={<Radio />}
                            label={item.option5}
                          />
                        </RadioGroup>
                      </Grid>
                    </FormControl>
                    <Grid item xs={12} className={classes.gridRow}>
                      <CardActions>
                        <Button
                          size="small"
                          className={classes.submitbttn}
                          type="submit"
                          onClick={() => {
                            updateQID(item.id);
                            formik.handleSubmit();
                          }}
                        >
                          Submit
                        </Button>
                      </CardActions>
                    </Grid>
                  </>
                );
              })}
            <Grid item xs={12} className={classes.textfileddiv}>
              <TextField
                label="Additional Point"
                variant="outlined"
                multiline={true}
                rows={4}
                className={classes.field}
              />
            </Grid>
            <Grid item xs={12} className={classes.gridRow}>
              <CardActions>
                <Button
                  size="small"
                  className={classes.submitbttn}
                  type="submit"
                  onClick={() => {
                    formik.handleSubmit();
                  }}
                >
                  Submit
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default Question_Cards;
