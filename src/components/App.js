import styled from "styled-components";
import { MovieCard } from "../components/MovieCard";
import { Header } from "./Header";
import { Layout } from "./Layout";

const App = () => {
  return (
    <Layout>
      <Header />
      <Heading>Most Recent Movies</Heading>
      <MovieList>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </MovieList>
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
