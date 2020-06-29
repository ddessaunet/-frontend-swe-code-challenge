import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// @ts-ignore
import * as selectn from 'selectn';

import {
  CountriesItems,
  CountryItem,
  CountryNameContainer,
  CountryNumber,
  CountryText,
  CountryButton,
  CountryItemDetails,
  CountryItemSummary,
  CountryDetailsLabel,
  CountryItemRow
} from './styles';

const List = ({
  countriesData,
  countryDetail,
  selectedCountry,
  setSelectedCountry
}: any): JSX.Element => {
  const [countries, setCountries] = useState([]);
  const [details, setDetails] = useState({} as any);

  useEffect(() => setCountries(countriesData), [countriesData]);
  useEffect(() => setDetails(countryDetail), [countryDetail]);

  const getCountryDetail = (isCountrySelected: boolean) => {
    const region = selectn('subregion.region.name', details);
    const subregion = selectn('subregion.name', details);
    const capital = selectn('capital', details);
    return !isCountrySelected ? (
      <CountryItemDetails>
        <h3>Country Details</h3>
        <CountryItemRow>
          <CountryDetailsLabel htmlFor="region">Region:</CountryDetailsLabel>
          <span>{region}</span>
        </CountryItemRow>
        <CountryItemRow>
          <CountryDetailsLabel htmlFor="subregion">Sub-Region:</CountryDetailsLabel>
          <span>{subregion}</span>
        </CountryItemRow>
        <CountryItemRow>
          <CountryDetailsLabel htmlFor="capital">Capital:</CountryDetailsLabel>
          <span>{capital}</span>
        </CountryItemRow>
      </CountryItemDetails>
    ) : (
      ''
    );
  };

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
            {getCountryDetail(isCountrySelected)}
          </CountryItem>
        );
      })}
    </CountriesItems>
  );
};

export default List;
