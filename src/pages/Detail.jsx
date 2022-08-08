import React from "react";
import { useParams } from "react-router-dom";
import { movieDetails } from "../api/request";

const Detail = () => {
  const params = useParams();
  console.log(params.postId);
  movieDetails(params.postId);

  return <></>;
};

export default Detail;
