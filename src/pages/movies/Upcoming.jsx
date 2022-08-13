import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import { upcomingReleases } from "../../api/request";
import styled from "styled-components";
import PaginationComp from "../../components/PaginationComp";
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

export const Header = styled.h1`
  font-size: x-large;
  font-weight: 500;
  margin: auto;
  width: 1280px;
  margin-top: 40px;
  margin-left: 100px;
`;

const Upcoming = () => {
  const [movieData, setMovieData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const whatevername = async () => {
    const res = await upcomingReleases(page); // 데이터를 불러오면 결과값이 res 에 담긴다
    // console.log(res);
    setMovieData(res.results);
    setTotalPages(res.total_pages);
  };

  useEffect(() => {
    whatevername();
  }, [page]);

  return (
    <>
      <Header>개봉 예정</Header>
      <Container>
        {movieData.map((movie) => (
          <MovieCard movie={movie} />
        ))}
        <PaginationComp totalPages={totalPages} setPage={setPage} />
      </Container>
    </>
  );
};

export default Upcoming;
