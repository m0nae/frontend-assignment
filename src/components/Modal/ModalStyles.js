import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 474px;
  width: 583px;
  top: 50%;
  left: 50%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  z-index: 100;

  @media (max-width: 640px) {
    width: 80%;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  align-self: flex-start;
  margin-bottom: 1rem;
  padding: 0 5%;

  @media (max-width: 640px) {
    padding-right: 20%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  height: 80%;
  width: 90%;
`;

export const MoviePoster = styled.div`
  position: relative;
  height: 100%;
  flex: 1;
  margin-right: 1rem;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);

  > img {
    position: absolute;
    right: -25px;
    top: -10px;
  }
`;

export const MoveInfo = styled.div`
  height: 100%;
  flex: 1;
  font-size: 14px;

  > * {
    margin-bottom: 1rem;
  }
`;

export const ReleaseDate = styled.p`
  margin-top: 0;
`;

export const Description = styled.p`
  overflow-y: auto;
  max-height: 40%;
`;

export const Rating = styled.p``;

export const CloseBtn = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  border: 1px solid #141e35;
  outline: none;
  background-color: #fff;
  right: 19px;
  top: 17px;
  line-height: 1;
  text-align: center;
  /* display: flex;
  align-items: center; */
  cursor: pointer;

  > * {
    height: 17px;
    width: 17px;
    left: 0;
    transform: translate(-20%, 10%);
  }
`;
