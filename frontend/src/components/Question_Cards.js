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
const Question_Cards = ({ name }) => {
  const [data, setData] = useState({
    id: "",
    stack: "",
    name: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
  });
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
  }, []);
  console.log(data);

  return (
    <>
      {data &&
        data.map((item) => {
          return (
            <>
              <Box>
                <Card variant="outlined">
                  <React.Fragment>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 24 }}
                        color="text.primary"
                        gutterBottom
                      >
                        {item.stack}
                      </Typography>
                    </CardContent>
                    <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        {item.name}
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label={item.option1}
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label={item.option2}
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label={item.option3}
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label={item.option4}
                        />
                        <FormControlLabel
                          value="5"
                          control={<Radio />}
                          label={item.option5}
                        />
                      </RadioGroup>
                      <TextField
                        id="outlined-basic"
                        label="Additional Point"
                        variant="outlined"
                        style={{ margin: "5px" }}
                      />
                    </FormControl>
                    <CardActions>
                      <Button size="small">Submit</Button>
                    </CardActions>
                  </React.Fragment>
                </Card>
              </Box>
            </>
          );
        })}
    </>
  );
};

export default Question_Cards;
