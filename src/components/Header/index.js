import logo from "../../images/logo.svg";
import { Container } from "./HeaderStyles";

export const Header = () => {
  return (
    <>
      <Container>
        <img src={logo} alt="Timescale" height="36px" width="136px" />
        <div>Insert input component here</div>
      </Container>
    </>
  );
};
