import {
  Container,
  Image,
  ImgContainer,
  Rating,
  Title,
} from "./MovieCardStyles";

export const MovieCard = ({ image, title, rating }) => {
  return (
    <>
      <Container>
        <ImgContainer>
          <Rating>{rating}</Rating>
          <Image src={image} alt="" />
        </ImgContainer>
        <Title>{title}</Title>
      </Container>
    </>
  );
};
