import React from "react";
import { useParams } from "react-router-dom";
import UserDetailsForScorecars from "../components/UserDetailsForScorecars";
const ScorePage = ({ userData }) => {
  console.log(userData);
  console.log("hello");
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <UserDetailsForScorecars />
    </div>
  );
};

export default ScorePage;
