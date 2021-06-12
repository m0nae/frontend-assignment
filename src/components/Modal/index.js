import ReactDom from "react-dom";
import moment from "moment";
import {
  Container,
  Overlay,
  CloseBtn,
  Title,
  ContentContainer,
  MoviePoster,
  MoveInfo,
  Description,
  ReleaseDate,
  Rating,
} from "./ModalStyles";

export const Modal = ({ isOpen, onClose, movie }) => {
  if (!isOpen) return null;
  if (!movie) return null;

  return ReactDom.createPortal(
    <>
      <Overlay />
      <Container>
        <CloseBtn onClick={onClose}>X</CloseBtn>
        <Title>{movie.title}</Title>
        <ContentContainer>
          <MoviePoster>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt=""
            />
          </MoviePoster>
          <MoveInfo>
            <ReleaseDate>
              <b>Release Date:</b>{" "}
              {moment(movie.release_date).format("MMMM DD, YYYY")}
            </ReleaseDate>
            <Description>{movie.overview}</Description>
            <Rating>
              <b>{movie.vote_average}</b> / 10 ({movie.vote_count} total votes)
            </Rating>
          </MoveInfo>
        </ContentContainer>
      </Container>
    </>,
    document.getElementById("modal")
  );
};
