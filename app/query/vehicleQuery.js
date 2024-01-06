const { gql } = require("@apollo/client");

export const GET_VEHICLES = gql`
  query GetVehicles {
    getVehicles {
      id
      make
      model
      year
      engine
      condition
      price
      location
      images
    }
  }
`;

export const GET_MAKEMODEL = gql`
  query Query {
    getMakes {
      location
      fuelType
      transmission
      makes {
        make
        model
      }
    }
  }
`;

export const GET_FILTERVEHICLES = gql`
  query FilterQuery($filter: FilterInput, $skip: Int!) {
    filterQuery(filter: $filter, skip: $skip) {
      id
      make
      model
      year
      engine
      condition
      price
      location
      images
    }
  }
`;
