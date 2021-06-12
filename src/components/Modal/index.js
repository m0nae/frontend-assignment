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
      <Overlay onClick={onClose} />
      <Container role="dialog">
        <CloseBtn onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </CloseBtn>
        <Title>{movie.title}</Title>
        <ContentContainer>
          <MoviePoster>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt="movie poster"
              />
            )}
          </MoviePoster>
          <MoveInfo>
            <ReleaseDate>
              <b>Release Date:</b>{" "}
              {moment(movie.release_date).format("MMMM DD, YYYY")}
            </ReleaseDate>
            <Description>
              {movie.overview ? movie.overview : "No description found."}
            </Description>
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
