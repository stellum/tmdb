import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { currentMovies } from "../api/request";
import styled from "styled-components";
import PaginationComp from "../components/PaginationComp";

export const Container = styled.div`
  display: flex;
  width: 1280px;
  margin: auto;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const NowPlaying = () => {
  const [movieData, setMovieData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const movies = async () => {
    const res = await currentMovies(page);
    setMovieData(res.results);
    console.log(res);
    setTotalPages(res.total_pages);
  };

  useEffect(() => {
    movies();
  }, [page]);

  return (
    <>
      <Container>
        {movieData.map((movie) => (
          <MovieCard movie={movie} />
        ))}
        <PaginationComp totalPages={totalPages} setPage={setPage} />
      </Container>
    </>
  );
};

export default NowPlaying;
