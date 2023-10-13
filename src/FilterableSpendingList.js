import SearchBar from './SearchBar';
import SpendingList from './SpendingList';
import { useState } from 'react';

function FilterableSpendingList() {
  const [filterText, setFilterText] = useState('');

  return (
    <div class="row">
      <div class="col s12 m4 l8">
        <div class="row">
          <SearchBar
            filterText={filterText}
            onFilterTextChange={setFilterText}
          />
          <SpendingList filterText={filterText} />
        </div>
      </div>
    </div>
  );
}

export default FilterableSpendingList;
