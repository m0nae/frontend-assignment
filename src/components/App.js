import styled from "styled-components";
import { MovieCard } from "../components/MovieCard";
import { Layout } from "./Layout";

const App = () => {
  return (
    <Layout>
      <MovieList>
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

const MovieList = styled.div`
  display: grid;
  grid-gap: 1rem;
  /* padding: 16px; */

  @media (max-width: 640px) {
    width: 50%;
  }

  @media (min-width: 640px) {
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
    padding: 50px;
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    padding: 50px;
  }

  @media (min-width: 1024px) {
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default App;
