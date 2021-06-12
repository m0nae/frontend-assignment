import { Container, Wrapper } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Container>{children}</Container>
      </Wrapper>
    </>
  );
};
