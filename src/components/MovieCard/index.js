import {
  Container,
  Image,
  ImgContainer,
  Rating,
  Title,
} from "./MovieCardStyles";

export const MovieCard = ({ image, title, rating, id, handleClick }) => {
  return (
    <>
      <Container onClick={() => handleClick(id)}>
        <ImgContainer>
          <Rating>{rating}</Rating>
          <Image src={image} alt="movie poster" />
        </ImgContainer>
        <Title>{title}</Title>
      </Container>
    </>
  );
};
