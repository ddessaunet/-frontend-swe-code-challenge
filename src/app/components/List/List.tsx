import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  CountriesItems,
  CountryItem,
  CountryNameContainer,
  CountryNumber,
  CountryText,
  CountryButton,
  CountryItemSummary
} from './styles';

const List = ({
  countriesData,
  selectedCountry,
  setSelectedCountry,
  getDetailTemplate
}: any): JSX.Element => {
  const [countries, setCountries] = useState([]);

  useEffect(() => setCountries(countriesData), [countriesData]);

  return (
    <CountriesItems>
      {countries?.map((country: any, idx: any) => {
        const isCountrySelected = selectedCountry !== country.name;

        return (
          <CountryItem key={country._id}>
            <CountryItemSummary>
              <CountryNameContainer>
                <CountryNumber>{idx + 1}</CountryNumber>
                <Link to={`/details/${country.name}`}>
                  <CountryText>{country.name}</CountryText>
                </Link>
              </CountryNameContainer>
              <CountryButton
                onClick={() => setSelectedCountry(country.name)}
                disabled={!isCountrySelected}
              >
                {isCountrySelected ? 'Select' : 'Selected'}
              </CountryButton>
            </CountryItemSummary>
            {getDetailTemplate(isCountrySelected)}
          </CountryItem>
        );
      })}
    </CountriesItems>
  );
};

export default List;
