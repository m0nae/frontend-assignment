import { SearchIcon } from "../Icons/SearchIcon";
import { Container, Input } from "./SearchInputStyles";

export const SearchInput = ({ children, setSearchInput, searchInput }) => {
  return (
    <Container>
      <SearchIcon />
      <Input
        placeholder={children}
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
    </Container>
  );
};
