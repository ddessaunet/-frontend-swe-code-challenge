import React, { useEffect, useState } from 'react';
// @ts-ignore
import * as selectn from 'selectn';

import { useLazyQuery, useQuery } from '@apollo/react-hooks';

import { GET_CONTRIES, GET_COUNTRY_SUMMARY } from './queries';

import { List } from '../../components/List';
import { SearchBar } from '../../components/SearchBar';
import { Detail } from '../../components/Detail';

import { CountriesContainer } from './styles';

const CountriesList = (): JSX.Element => {
  const [selectedCountry, setSelectedCountry] = useState(undefined);
  const [countries, setCountries] = useState([]);
  const [countryDetail, setCountryDetail] = useState({} as any);
  const [searchParams, setSearchParams] = useState('');

  const { loading, error, data } = useQuery(GET_CONTRIES);
  const [
    getCountrySummary,
    { loading: countrySummaryLoading, data: countrySummaryData }
  ] = useLazyQuery(GET_COUNTRY_SUMMARY, {
    variables: { name: selectedCountry }
  });

  useEffect(() => setCountries(data?.Country), [data]);

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

  useEffect(() => {
    console.log(countrySummaryData);
    setCountryDetail(countrySummaryData?.Country[0]);
  }, [countrySummaryData]);

  const handleCountrySelection = (value: any) => {
    setSelectedCountry(value);
    getCountrySummary();
  };

  const getDetail = (isCountrySelected: boolean) => {
    return !isCountrySelected ? (
      <Detail countryDetail={countryDetail} loading={countrySummaryLoading} />
    ) : (
      ''
    );
  };

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
        countriesData={countries}
        selectedCountry={selectedCountry}
        setSelectedCountry={handleCountrySelection}
        getDetailTemplate={getDetail}
      />
    </CountriesContainer>
  );
};

export default CountriesList;
