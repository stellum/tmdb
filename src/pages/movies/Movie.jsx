import React, { useEffect, useState } from "react";
import { getMovie } from "../../api/request";
import MovieCard from "../../components/MovieCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PaginationComp from "../../components/PaginationComp";

export const ContentWrapper = styled.div`
  width: 1280px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;

export const Content = styled.div`
  display: flex;
  /* width: 1280px; */
  width: 100%;
  /* margin: auto; */
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 20px;
  h2 {
    font-size: 1.6em;
    font-weight: 500;
    margin-top: 20px;
  }

  /* margin: auto;
  width: 1280px;
  margin-top: 40px;
  margin-left: 100px; */
`;

export const CardStyle = styled.div`
  /* background-color: red; */
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
      <ContentWrapper>
        <Header>
          <h2>인기 영화</h2>
        </Header>
        <Content>
          <CardStyle>
            {movieData.map((movie) => (
              <Link to={`/detail/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            ))}
          </CardStyle>
          <PaginationComp totalPages={totalPages} setPage={setPage} />
        </Content>
      </ContentWrapper>
    </>
  );
};

export default Popular;
