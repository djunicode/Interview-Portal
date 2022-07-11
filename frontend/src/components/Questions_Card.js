import React, { useEffect, useState } from "react";
import axios from "axios";
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
import { useParams } from "react-router-dom";


export default function Questions_Card() {
  const { id } = useParams();
  console.log(id);
  const [userData, setUserData] = useState([]);
  const Fetchdata = () => {
    var config = {
      method: "get",
      url: `https://unicodeinterview.pythonanywhere.com/accounts/interviewee_get/${id}`,
      headers: {
        Authorization: `token ${localStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    Fetchdata();
  }, []);
  // console.log(data.user.name);
  // Fetchdata();

  const [data, setData] = useState([
    {
      id: "",
      stack: "",
      name:"",
      option1:"",
      option2:"",
      option3:"",
      option4:"",
      option5:"",
    },
  ]);
  console.log(userData);

  {userData.application && userData.application.stack.map((item) => {
    var myHeaders = new Headers();
	myHeaders.append(
		"Authorization",
		`token ${localStorage.getItem("token")}`
	);

	var requestOptions = {
		method: "GET",
		headers: myHeaders,
		redirect: "follow",
	};


	fetch(
		`http://unicodeinterview.pythonanywhere.com/accounts/question/${item.name}`,
		requestOptions
	)
		.then((response) => response.json())
    .then((result) => {
      console.log(result);
      setData(result);
    })
		.catch((error) => console.log("error", error));   


	return (
		<Box >
			<Card variant="outlined">
      <React.Fragment>
		<CardContent>
			<Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
				Frontend
			</Typography>
		</CardContent>
		<FormControl>
			
      {data.map((item, index) => (
        <div key={index}>
        <FormLabel id="demo-row-radio-buttons-group-label">
        {item.name}
        </FormLabel>
        	<RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="1" control={<Radio />} label={item.option1} />
          <FormControlLabel value="2" control={<Radio />} label={item.option2} />
          <FormControlLabel value="3" control={<Radio />} label={item.option3} />
          <FormControlLabel value="4" control={<Radio />} label={item.option4} />
          <FormControlLabel value="5" control={<Radio />} label={item.option5} />
        </RadioGroup>
       
        </div>
      ))}
     
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
	);
      })}
}
