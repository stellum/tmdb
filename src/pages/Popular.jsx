import React, { useEffect, useState } from "react";
import { getMovie } from "../api/request";
import MovieCard from "../components/MovieCard";

const Popular = () => {
  const [movieData, setMovieData] = useState([]);

  const whatevername = async () => {
    const res = await getMovie();
    setMovieData(res.results);
    console.log(res);
  };

  useEffect(() => {
    whatevername();
  }, []);

  return (
    <>
      {movieData.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </>
  );
};

export default Popular;
