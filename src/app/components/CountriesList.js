import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_CONTRIES = gql`
  query GET_CONTRIES_QUERY {
    Country {
      _id
      name
    }
  }
`;

function CountriesList(props) {
  const { loading, error, data } = useQuery(GET_CONTRIES);

  if (loading) return <p>Loading countries...</p>;

  if (error) return <p>Error trying to fetch countries data :(</p>;

  return (
    <ul className="countriesList">
      {data.Country.map((country, idx) => {
        return (
          <li className="countriesItem" key={country._id}>
            <div className="countryNameContainer">
              <div className="countriesNumber">{idx + 1}</div>
              <div className="countriesText">{country.name}</div>
            </div>

            {props.selectedCountry !== country.name && (
              <button
                onClick={() => props.setSelectedCountry(country.name)}
                className="primaryButton"
              >
                Select
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default CountriesList;
