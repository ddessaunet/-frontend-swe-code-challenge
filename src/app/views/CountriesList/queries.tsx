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
