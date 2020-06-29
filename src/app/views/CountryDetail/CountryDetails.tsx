import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRY_DETAILS } from './queries';

import { CountryContainer, CountryLabel, LabelContainer } from './styles';

const CountryDetails = (): JSX.Element => {
  const [country, setCountry] = useState({} as any);
  const { name } = useParams();

  const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { name }
  });

  useEffect(() => setCountry(data?.Country[0]), [data]);

  if (loading) return <p>Loading country...</p>;

  if (error) return <p>Error trying to fetch country data :(</p>;

  return (
    <CountryContainer>
      <div>
        <Link to="/">Back</Link>
      </div>
      <div>
        <h2>Country details !!!</h2>
      </div>
      <LabelContainer>
        <CountryLabel>Name:</CountryLabel>
        <span>{country?.name}</span>
      </LabelContainer>
      <LabelContainer>
        <CountryLabel>Region:</CountryLabel>
        <span>{country?.subregion.region.name}</span>
      </LabelContainer>
      <LabelContainer>
        <CountryLabel>Sub-Region:</CountryLabel>
        <span>{country?.subregion.name}</span>
      </LabelContainer>
      <LabelContainer>
        <CountryLabel>Timezones:</CountryLabel>
        {country?.timezones.map((timezone: any) => (
          <span key={timezone._id}>{timezone.name},</span>
        ))}
      </LabelContainer>
      <LabelContainer>
        <CountryLabel>Currencies</CountryLabel>
        {country?.currencies.map((currency: any) => (
          <span key={currency._id}>{currency.name},</span>
        ))}
      </LabelContainer>
      <LabelContainer>
        <CountryLabel>Spoken languages</CountryLabel>
        {country?.officialLanguages.map((lang: any) => (
          <span key={lang._id}>{lang.name},</span>
        ))}
      </LabelContainer>
    </CountryContainer>
  );
};

export default CountryDetails;
