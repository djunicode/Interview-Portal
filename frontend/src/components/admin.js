import * as React from "react";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Interviewers from "./Interviewers";
import PanelDetails from "./PanelDetails";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {Button} from "@mui/material";

export default function CollapsibleTable() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  var myHeaders = new Headers();

  myHeaders.append("Authorization", `Token ${localStorage.getItem("token")}`);

  const [user, setUser] = useState([
    {
      id: "0",
      interviewees: [
        {
          id: "0",
          application: {
            stack: [{ name: "", repo_link: "" }],
            resume_link: "",
          },
          user: {
            email: "",
            sapid: "",
            grad_year: "",
            name: "",
          },
        },
      ],
      interviewers: [
        {
          id: "0",
          role: "Fullstack",
          stack: 1,
          user: {
            email: "",
            sapid: "",
            grad_year: 2020,
            name: "",
          },
        },
      ],
      name: "Panel",
    },
  ]);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    fetch(
      "https://unicodeinterview.pythonanywhere.com/accounts/panel_details/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setUser(result);
      })
      .catch((error) => console.log("error", error));

      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let stackName = [];
  user.map((item) => {
    stackName.push(item.name);
    return item;
  });

  return (
    <Grid container>
      <Grid item sm={12}>
        <div style={{ clear: "both" }}>
          <Tabs value={value} onChange={handleChange} centered>
            {stackName.map((item, index) => (
              <Tab label={item} key={index} />
            ))}
          </Tabs>
          <Button
            size="large"
            variant="contained"
            sx={{
              textTransform: "none",
              padding: "5px",
              float: "right",
              margin: "10px",
            }}
            onClick={() => {
              
            }}
          >
            Schedule Interview
          </Button>
          {user
            .filter((item) => item.name === stackName[value])
            .map((item, i) => (
              <div key={i}>
                <Interviewers data={item} />
                <PanelDetails user={user.filter((item)=> item.name === stackName[value])} />
              </div>
            ))}
        </div>
      </Grid>
    </Grid>
  );
}
