import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { topRated } from "../api/request";
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

const TopRated = () => {
  const [movieData, setMovieData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const whatevername = async () => {
    const res = await topRated(page); // 데이터를 불러오면 결과값이 res 에 담긴다
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
          <MovieCard movie={movie} />
        ))}
        <PaginationComp totalPages={totalPages} setPage={setPage} />
      </Container>
    </>
  );
};

export default TopRated;
