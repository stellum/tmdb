import React from "react";
import { CardWrap, Movie, Options, TextWrap } from "../styles/MovieCard";
import movie from "../assets/movie.jpeg";
import { CgMoreO } from "react-icons/cg";

const TvCard = ({ tv }) => {
  // console.log(tv);
  return (
    <>
      {tv && (
        <CardWrap>
          <MovieImg>
            <div>
              <CgMoreO />
            </div>
          </MovieImg>
          <Movie
            src={`https://image.tmdb.org/t/p/w300/${tv.poster_path}`}
            alt={tv.name}
          >
            {/* <img src={movie} alt="" /> */}
          </Movie>
          <TextWrap>
            <h1>{tv.name}</h1>
            <p>{tv.first_air_date}</p>
          </TextWrap>
        </CardWrap>
      )}
    </>
  );
};

export default TvCard;
