import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  CountriesItems,
  CountryItem,
  CountryNameContainer,
  CountryNumber,
  CountryText,
  CountryButton
} from './styles';

const List = ({ data, selectedCountry, setSelectedCountry }: any): JSX.Element => {
  const [countries, setCountries] = React.useState([]);

  useEffect(() => {
    console.log(data);
    setCountries(data);
  }, [data]);

  return (
    <CountriesItems>
      {countries?.map((country: any, idx: any) => {
        const isCountrySelected = selectedCountry !== country.name;

        return (
          <CountryItem key={country._id}>
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
          </CountryItem>
        );
      })}
    </CountriesItems>
  );
};

export default List;
