import React, { useState, useEffect } from "react";
import TvCard from "../../components/TvCard";
import { getTv } from "../../api/request";
import styled from "styled-components";
import { Link } from "react-router-dom";
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

const Tv = () => {
  const [tvData, setTvData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const tvPopular = async () => {
    const res = await getTv(page);
    // console.log(res);
    setTvData(res.results);
    setTotalPages(res.total_pages);
  };

  useEffect(() => {
    tvPopular();
  }, [page]);

  return (
    <>
      <Header>인기 TV 프로그램</Header>
      <Container>
        {tvData.map((tv) => (
          <Link to={`/detail/${tv.id}`}>
            <TvCard tv={tv} />
          </Link>
        ))}
        <PaginationComp totalPages={totalPages} setPage={setPage} />
      </Container>
    </>
  );
};

export default Tv;
