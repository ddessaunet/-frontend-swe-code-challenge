import React, { useEffect, useState } from 'react';
import { useDebounce } from '../../utils/DebounceHook';

const SearchBar = ({ searchBy }: any): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    console.log(searchTerm);
    if (debouncedSearchTerm && searchTerm.length > 2) {
      searchBy(searchTerm);
    } else {
      searchBy('');
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <label htmlFor="country">Filter by country name, capital or subregion: </label>
      <input id="country" onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
  );
};

export default SearchBar;
