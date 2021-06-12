import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { MovieCard } from "../components/MovieCard";
import { Header } from "./Header";
import { Layout } from "./Layout";
import { Modal } from "./Modal";
import { MovieList } from "./MovieList";
import { getMovies } from "../utils/getMovies";

const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();
  const [searchInput, setSearchInput] = useState("");
  let timeout;

  useEffect(() => {
    getMovies().then((data) => setMovieData(data.data.results));
  }, []);

  // wrapped the API call inside of
  // a debounce function to prevent the user from making
  // too many API calls when searching for movies
  useEffect(() => {
    if (searchInput.length > 1) {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        axios({
          method: "get",
          url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`,
          params: {
            query: searchInput,
          },
        }).then((data) => setMovieData(data.data.results));
      }, 300);
    } else if (searchInput.length === 0) {
      getMovies().then((data) => setMovieData(data.data.results));
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [searchInput]);

  const handleClick = (id) => {
    setSelectedMovie(id);
    setIsOpen(true);
  };

  const movies = movieData.map((movie) => (
    <MovieCard
      id={movie.id}
      image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
      rating={movie.vote_average}
      title={movie.title}
      handleClick={handleClick}
    />
  ));

  return (
    <Layout>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <Heading>
        {searchInput.length > 0 ? "Searched Movies" : "Most Recent Movies"}
      </Heading>
      <MovieList>{movies ? movies : "Loading..."}</MovieList>
      <Modal
        movie={movieData.filter((movie) => movie.id === selectedMovie)[0]}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </Layout>
  );
};

const Heading = styled.h2`
  margin-top: 2.2rem;
  margin-bottom: 22px;
  font-size: 24px;
  font-weight: 700;
`;

export default App;
