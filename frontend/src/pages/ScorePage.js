import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import Questions_Card from "../components/Questions_Card";
import Question_Cards from "../components/Question_Cards";
import UserDetailsForScorecars from "../components/UserDetailsForScorecars";
const ScorePage = () => {
  // console.log(userData);

  const { id } = useParams();
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
        // console.log(response.data);
        setUserData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    Fetchdata();
  }, []);
  // console.log(id);
  return (
    <div>
      <UserDetailsForScorecars />
      <Questions_Card />

      {userData.application &&
        userData.application.stack.map((item) => {
          console.log(item.name);
          return (
            <>
              {/* <Typography>{item.name}</Typography> */}
              <Question_Cards name={item.name} />
            </>
          );
        })}
    </div>
  );
};

export default ScorePage;
