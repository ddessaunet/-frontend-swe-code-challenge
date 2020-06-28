import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import {
  CountriesItems,
  CountryItem,
  CountryNameContainer,
  CountryNumber,
  CountryText,
  CountryButton
} from './styles';

const GET_CONTRIES = gql`
  query GET_CONTRIES_QUERY {
    Country {
      _id
      name
    }
  }
`;

function List(props) {
  const { loading, error, data } = useQuery(GET_CONTRIES);

  if (loading) return <p>Loading countries...</p>;

  if (error) return <p>Error trying to fetch countries data :(</p>;

  return (
    <CountriesItems>
      {data.Country.map((country, idx) => {
        const isCountrySelected = props.selectedCountry !== country.name;

        return (
          <CountryItem key={country._id}>
            <CountryNameContainer>
              <CountryNumber>{idx + 1}</CountryNumber>
              <CountryText>{country.name}</CountryText>
            </CountryNameContainer>

            <CountryButton
              onClick={() => props.setSelectedCountry(country.name)}
              disabled={!isCountrySelected}
            >
              {isCountrySelected ? 'Select' : 'Selected'}
            </CountryButton>
          </CountryItem>
        );
      })}
    </CountriesItems>
  );
}

export default List;
