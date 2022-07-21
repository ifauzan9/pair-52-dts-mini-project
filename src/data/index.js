import axios from "axios";

export const getPopularMovies = () => {
  const data = axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=5ee726377bf06ea70e2eb78c6e885d82"
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));

  return data;
};

export const getNowPlayingMovies = () => {
  // https://api.themoviedb.org/3/movie/now_playing?api_key=5ee726377bf06ea70e2eb78c6e885d82
  const data = axios
    .get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=5ee726377bf06ea70e2eb78c6e885d82"
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));

  return data;
};

export const getTopRatedMovies = () => {
  const data = axios
    .get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=5ee726377bf06ea70e2eb78c6e885d82"
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));

  return data;
};

export const getUpComingMovies = () => {
  const data = axios
    .get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=5ee726377bf06ea70e2eb78c6e885d82"
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));

  return data;
};

export const getTrendingWeekMovies = () => {
  const data = axios
    .get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=5ee726377bf06ea70e2eb78c6e885d82"
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));

  return data;
};

export const getActionMovies = () => {
  const data = axios
    .get(
      "https://api.themoviedb.org/3/discover/movie?api_key=5ee726377bf06ea70e2eb78c6e885d82&with_genres=28"
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));

  return data;
};

export const getTop10Movies = () => {
  const data = axios
    .get(
      "https://api.themoviedb.org/3/discover/movie?api_key=5ee726377bf06ea70e2eb78c6e885d82&with_genres=18"
    )
    .then((res) => res.data.results)
    .catch((err) => console.log(err));

  return data;
};

// https://api.themoviedb.org/3/search/movie?api_key=5ee726377bf06ea70e2eb78c6e885d82&query=horror

// https://api.themoviedb.org/3/discover/movie?api_key=5ee726377bf06ea70e2eb78c6e885d82&with_genres=28
