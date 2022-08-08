import React, { useEffect, useState } from "react";
import { getMovie } from "../api/request";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  width: 1280px;
  margin: auto;
  justify-content: space-around;
  flex-wrap: wrap;
`;

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
      <Container>
        {movieData.map((movie) => (
          <Link to={`/detail/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </Container>
    </>
  );
};

export default Popular;
