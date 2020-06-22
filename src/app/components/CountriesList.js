import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_CONTRIES = gql`
  query GET_CONTRIES_QUERY {
    Country {
      _id
      name
      subregion {
        name
      }
    }
  }
`;

function CountriesList() {
  const { loading, error, data } = useQuery(GET_CONTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul className="countriesList">
      {data.Country.map((country, idx) => {
        console.log({ country });

        return (
          <li className="countriesItem" key={country._id}>
            <div className="countriesNumber">{idx + 1}</div>
            <div className="countriesText">{country.name}</div>
            <div className="countriesText">
              {country.subregion && country.subregion.name}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CountriesList;
