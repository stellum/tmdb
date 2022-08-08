import React from "react";
import { useParams } from "react-router-dom";
import { tvDetails } from "../api/request";

const TvDetail = () => {
  const params = useParams();
  console.log(params.postId);
  tvDetails(params.postId);

  return <div></div>;
};

export default TvDetail;
