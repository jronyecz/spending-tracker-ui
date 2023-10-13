function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">search</i>
          <input
            id="search"
            type="search"
            required
            value={filterText}
            placeholder="Search..."
            onChange={e => onFilterTextChange(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
