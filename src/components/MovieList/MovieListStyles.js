import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-row-gap: 25px;
  grid-column-gap: 27px;

  @media (min-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1324px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
