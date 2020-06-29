import { gql } from 'apollo-boost';

export const GET_CONTRIES = gql`
  query GET_CONTRIES_QUERY {
    Country {
      _id
      name
      capital
      subregion {
        name
      }
    }
  }
`;

export const GET_COUNTRY_SUMMARY = gql`
  query GET_COUNTRY_DETAILS_QUERY($name: String!) {
    Country(name: $name) {
      _id
      capital
      subregion {
        name
        region {
          name
        }
      }
    }
  }
`;
