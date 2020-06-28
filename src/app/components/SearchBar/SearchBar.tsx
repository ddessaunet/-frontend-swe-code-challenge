import React from 'react';

const SearchBar = ({ searchBy }: any): JSX.Element => {
  const handleChange = (event: any) => {
    if (event.target.value.length > 2) {
      searchBy(event.target.value);
    } else {
      searchBy('');
    }
  };

  return (
    <div>
      <label htmlFor="country">Filter by country name, capital or subregion: </label>
      <input id="country" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
