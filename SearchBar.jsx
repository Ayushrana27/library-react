function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    );
  }
  
  export default SearchBar;
