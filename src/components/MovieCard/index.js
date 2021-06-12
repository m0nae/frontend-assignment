import { Container, ImgContainer, Rating, Title } from "./MovieCardStyles";

export const MovieCard = () => {
  return (
    <>
      <Container>
        <ImgContainer>
          <Rating>7.9</Rating>
        </ImgContainer>
        <Title>Movie Title</Title>
      </Container>
    </>
  );
};
