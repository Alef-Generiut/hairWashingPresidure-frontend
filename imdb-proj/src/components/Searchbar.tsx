import "./Header.css"

interface SearchBarInterface {
  searchBarInput: string;
  handleSearchBarInput(input: string): void;
}

const SearchBar = ({
  searchBarInput,
  handleSearchBarInput,
}: SearchBarInterface) => {
  return (
    <input
      type="text"
      className="searchBar"
      value={searchBarInput}
      placeholder="חפש מטלה.."
      onChange={(input) =>
        handleSearchBarInput(input.target.value.toLowerCase())
      }
    ></input>
  );
};

export default SearchBar;
