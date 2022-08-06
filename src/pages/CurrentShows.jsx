import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { currentMovies } from "../api/request";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1280px;
  margin: auto;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const CurrentShows = () => {
  const [movieData, setMovieData] = useState([]);

  const movies = async () => {
    const res = await currentMovies();
    setMovieData(res.results);
    console.log(res);
  };

  useEffect(() => {
    movies();
  }, []);

  return (
    <>
      <Container>
        {movieData.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </Container>
    </>
  );
};

export default CurrentShows;
