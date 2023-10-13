import SearchBar from './SearchBar';
import SpendingList from './SpendingList';
import { useState } from 'react';

function FilterableSpendingList() {
  const [filterText, setFilterText] = useState('');

  return (
    <div>
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      <SpendingList filterText={filterText} />
    </div>
  );
}

export default FilterableSpendingList;
