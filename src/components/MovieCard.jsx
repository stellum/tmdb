import React from "react";
import { CardWrap, Movie, Options, TextWrap } from "../styles/MovieCard";
import movie from "../assets/movie.jpeg";
import { CgMoreO } from "react-icons/cg";

const MovieCard = ({ movie }) => {
  // console.log(movie);
  return (
    <>
      {movie && (
        <CardWrap>
          <Options>
            <div>
              <CgMoreO />
            </div>
          </Options>
          <Movie
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          >
            {/* <img src={movie} alt="" /> */}
          </Movie>
          <TextWrap>
            <h1>{movie.title}</h1>
            <p>{movie.release_date}</p>
          </TextWrap>
        </CardWrap>
      )}
    </>
  );
};

export default MovieCard;
