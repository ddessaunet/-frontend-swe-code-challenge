import { gql } from 'apollo-boost';

export const GET_COUNTRY_DETAILS = gql`
  query GET_COUNTRY_DETAILS_QUERY($name: String!) {
    Country(name: $name) {
      _id
      name
      capital
      timezones {
        _id
        name
      }
      subregion {
        name
        region {
          name
        }
      }
      currencies {
        _id
        name
      }
      officialLanguages {
        _id
        name
      }
    }
  }
`;
