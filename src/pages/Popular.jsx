import React, { useEffect, useState } from "react";
import { getMovie } from "../api/request";
import MovieCard from "../components/MovieCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

const Popular = () => {
  const [movieData, setMovieData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const whatevername = async () => {
    const res = await getMovie(page); // 데이터를 불러오면 결과값이 res 에 담긴다
    // console.log(res);
    setMovieData(res.results);
    setTotalPages(res.total_pages);
  };

  useEffect(() => {
    whatevername();
  }, [page]);

  return (
    <>
      <Container>
        {movieData.map((movie) => (
          <Link to={`/detail/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
        <PaginationComp totalPages={totalPages} setPage={setPage} />
      </Container>
    </>
  );
};

export default Popular;
