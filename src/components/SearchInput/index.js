import { SearchIcon } from "../Icons/SearchIcon";
import { Container, Input } from "./SearchInputStyles";

export const SearchInput = ({ children }) => {
  return (
    <Container>
      <SearchIcon />
      <Input placeholder={children} />
    </Container>
  );
};
