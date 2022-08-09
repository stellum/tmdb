import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getMovie = async (page) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-kr&page=${page}`,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const currentMovies = async (page) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-kr&page=${page}`,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const upcomingReleases = async (page) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-kr&page=${page}`,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const topRated = async (page) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-kr&page=${page}`,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const movieDetails = async (movieId) => {
  // console.log("movieId", movieId);

  try {
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-kr&page=1`,
    });
    if (response.status === 200) {
      console.log(response);
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const tvDetails = async (tvId) => {
  // console.log("tvId", tvId);
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}&language=en-kr&page=1`,
    });
    if (response.status === 200) {
      console.log(response);
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};
