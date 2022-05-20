import { Grid, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";

const ProfileDetails = () => {
  const [userData, setUserData] = useState("");
  const FetchUserData = () => {
    var axios = require("axios");
    var data = "";

    var config = {
      method: "get",
      url: "https://unicodeinterview.pythonanywhere.com/accounts/interviewee_update/",
      headers: {
        Authorization: "token 32bd4c75bcd8f515571c85071c0b5b5eb7eb0384",
        Cookie:
          "csrftoken=lYS6Ws57155J4Ki9iYZz1x2w0PpUe2Sr4mb8R44e1lgymx2kHYNywUJX8bubAK9C",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setUserData(response.data.json());
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    FetchUserData();
  }, []);
  console.log(userData.user);

  return (
    <>
      <Grid item>
        <Typography>Check profile Details</Typography>
      </Grid>
      {userData.user &&
        userData.user.map((user) => {
          return (
            <>
              <Grid item xs={6}>
                <Typography>Name:</Typography>
              </Grid>
              <Grid item xs={6}>
                {user.name}
              </Grid>
            </>
          );
        })}
    </>
  );
};

export default ProfileDetails;
