import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { MovieCard } from "../components/MovieCard";
import { Header } from "./Header";
import { Layout } from "./Layout";
import { Modal } from "./Modal";

const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`,
    }).then((data) => setMovieData(data.data.results));
  }, []);

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
      <Header />
      <Heading>Most Recent Movies</Heading>
      <MovieList>{movies && movies}</MovieList>
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

const MovieList = styled.div`
  display: grid;
  grid-row-gap: 25px;
  grid-column-gap: 27px;

  @media (max-width: 640px) {
    width: 50%;
  }

  @media (min-width: 640px) {
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
    /* padding: 50px 0; */
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    /* padding: 50px 0; */
  }

  @media (min-width: 1024px) {
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default App;
