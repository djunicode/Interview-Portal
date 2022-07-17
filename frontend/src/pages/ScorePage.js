import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import QuestionCards from "../components/Question_Cards";
import UserDetailsForScorecars from "../components/UserDetailsForScorecars";
const ScorePage = () => {
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
        setUserData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    Fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <UserDetailsForScorecars />

      {userData.application &&
        userData.application.stack.map((item, index) => {
          return <QuestionCards key={index} name={item.name} />;
        })}
    </div>
  );
};

export default ScorePage;
