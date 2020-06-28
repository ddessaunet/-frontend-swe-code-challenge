import React, { useState } from 'react';
import { List } from '../../components/List';

import { CountriesContainer } from './styles';

function CountriesList() {
  const [selectedCountry, setSelectedCountry] = useState(undefined);

  return (
    <div>
      <h1>Country selection</h1>

      <p>
        Selected country:
        {' '}
        <b>{selectedCountry || 'Nothing selected yet'}</b>
      </p>

      <p>Please select a country from the list above:</p>

      <CountriesContainer>
        <List
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      </CountriesContainer>
    </div>
  );
}

export default CountriesList;
