import axios from "axios";

export const getMovies = () => {
  return axios({
    method: "get",
    url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`,
  });
};
