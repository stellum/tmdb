import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getMovie = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-kr&page=1`,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const currentMovies = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-kr&page=1`,
    });
    if (response.status === 200) {
      return response.data;
    }
  } catch (e) {
    console.log(e);
  }
};
