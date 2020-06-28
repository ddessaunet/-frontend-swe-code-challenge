import React, { useEffect, useState } from 'react';
import { List } from '../../components/List';

import { CountriesContainer } from './styles';
import { useQuery } from '@apollo/react-hooks';

import { GET_CONTRIES } from './queries';
import { SearchBar } from '../../components/SearchBar';

// @ts-ignore
import * as selectn from 'selectn';

const CountriesList = (): JSX.Element => {
  const [selectedCountry, setSelectedCountry] = useState(undefined);
  const [countries, setCountries] = useState([]);
  const [searchParams, setSearchParams] = useState('');

  const { loading, error, data } = useQuery(GET_CONTRIES);

  useEffect(() => {
    console.log(data);
    setCountries(data?.Country);
  }, [data]);

  useEffect(() => {
    if (searchParams) {
      const filterElem = data?.Country.filter(
        (country: any) =>
          selectn('name', country)?.toLowerCase().includes(searchParams.toLowerCase()) ||
          selectn('subregion.name', country)?.toLowerCase().includes(searchParams.toLowerCase()) ||
          selectn('capital', country)?.toLowerCase().includes(searchParams.toLowerCase())
      );

      if (filterElem) {
        setCountries(filterElem);
      }
    } else {
      setCountries(data?.Country);
    }
  }, [searchParams]);

  if (loading) return <p>Loading countries...</p>;

  if (error) return <p>Error trying to fetch countries data :(</p>;

  return (
    <CountriesContainer>
      <div>
        <h1>Country selection</h1>

        <p>
          Selected country: <b>{selectedCountry || 'Nothing selected yet'}</b>
        </p>

        <p>Please select a country from the list above:</p>
      </div>

      <SearchBar searchBy={setSearchParams} />

      <List
        data={countries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
    </CountriesContainer>
  );
};

export default CountriesList;
