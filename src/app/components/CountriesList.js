import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_CONTRIES = gql`
  query GET_CONTRIES_QUERY {
    Country {
      name
    }
  }
`;

function CountriesList() {
  const { loading, error, data } = useQuery(GET_CONTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul className="countriesList">
      {data.Country.map((country, idx) => (
        <li className="countriesItem" key={idx}>
          <div className="countriesNumber">{idx + 1}</div>
          <div className="countriesText">{country.name}</div>
        </li>
      ))}
    </ul>
  );
}

export default CountriesList;
