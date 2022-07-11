import React from "react";
import { useParams } from "react-router-dom";
import Questions_Card from "../components/Questions_Card";
import UserDetailsForScorecars from "../components/UserDetailsForScorecars";
const ScorePage = () => {
  console.log("hello");
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <UserDetailsForScorecars />
      < Questions_Card />
    </div>
  );
};

export default ScorePage;
