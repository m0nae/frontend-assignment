import logo from "../../images/logo.svg";
import { SearchIcon } from "../Icons/SearchIcon";
import { SearchInput } from "../SearchInput";
import { Container } from "./HeaderStyles";

export const Header = ({ searchInput, setSearchInput }) => {
  return (
    <>
      <Container>
        <img src={logo} alt="Timescale" height="36px" width="136px" />
        <SearchInput searchInput={searchInput} setSearchInput={setSearchInput}>
          Search for a movie
        </SearchInput>
      </Container>
    </>
  );
};
