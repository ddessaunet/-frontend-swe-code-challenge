import React, { useEffect, useState } from 'react';
// @ts-ignore
import * as selectn from 'selectn';

import {
  CountryDetailsLabel,
  CountryItemDetails,
  CountryItemRow,
  LoadingMessage,
  DetailsTitle
} from './styles';

const Detail = ({ countryDetail, loading }: any): JSX.Element => {
  const [details, setDetails] = useState({} as any);
  const [loadingMessage, setLoadingMessage] = useState(false);

  useEffect(() => setDetails(countryDetail), [countryDetail]);
  useEffect(() => setLoadingMessage(loading), [loading]);

  if (loadingMessage) return <LoadingMessage>Loading summary...</LoadingMessage>;

  return (
    <CountryItemDetails>
      <DetailsTitle>Country Details</DetailsTitle>
      <CountryItemRow>
        <CountryDetailsLabel htmlFor="region">Region:</CountryDetailsLabel>
        <span>{selectn('subregion.region.name', details)}</span>
      </CountryItemRow>
      <CountryItemRow>
        <CountryDetailsLabel htmlFor="subregion">Sub-Region:</CountryDetailsLabel>
        <span>{selectn('subregion.name', details)}</span>
      </CountryItemRow>
      <CountryItemRow>
        <CountryDetailsLabel htmlFor="capital">Capital:</CountryDetailsLabel>
        <span>{selectn('capital', details)}</span>
      </CountryItemRow>
    </CountryItemDetails>
  );
};

export default Detail;
