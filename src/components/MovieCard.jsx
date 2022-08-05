import React from "react";
import { CardWrap, Movie, MovieImg, TextWrap } from "../styles/MovieCard";
import movie from "../assets/movie.jpeg";
import { CgMoreO } from "react-icons/cg";

const MovieCard = () => {
  return (
    <CardWrap>
      <MovieImg>
        <CgMoreO />
      </MovieImg>
      <Movie src={movie} alt="">
        {/* <img src={movie} alt="" /> */}
      </Movie>
      <TextWrap>
        <h1>메이의 새빨간 비밀</h1>
        <p>3월 10, 2022</p>
      </TextWrap>
    </CardWrap>
  );
};

export default MovieCard;
