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

export const REGISTER_USER = gql`
  mutation Mutation($registeruser: RegisterUser!) {
    registerUser(registeruser: $registeruser)
  }
`;

export const LOGIN_USER = gql`
  mutation Mutation($loginuser: LoginUser!) {
    loginUser(loginuser: $loginuser) {
      token
    }
  }
`;

export const GETUSER_DETAIL = gql`
  query GetUser {
    getUser {
      email
      username
      phone
      profileImage
    }
  }
`;

export const GETVEHICLE_DETAIL = gql`
  query GetVehicle($vehicleId: ID!) {
    getVehicle(vehicleId: $vehicleId) {
      id
      make
      model
      year
      transmission
      engine
      fuelType
      price
      condition
      location
      regYearMonth
      chassis
      color
      doors
      driveType
      engineCapacity
      engineCode
      gradeClass
      interiorColor
      mileAge
      port
      saleLocation
      seats
      steering
      StandardFeatures {
        POWERSTEERING
        POWERWINDOW
        POWERMIRROR
        WINKERMIRROR
        POWERSEAT
        LEATHERSEAT
        AC
        ABS
        AIRBAG
        SIDEAIRBAG
        DUALAIRBAGS
        NAVIGATION
        BACKCAMERA
        TV
        CD
        DVD
        MD
        CASSETTE
        ALLOYWHEEL
        KEYLESSENTRY
        SMARTKEY
        PUSHSTART
        SUNROOF
        MOONROOF
        FULLFLATSEAT
        THIRDROWSEAT
        WALKTHROUGH
        SIXSEATS
        SEVENSEATS
        EIGHTSEATS
        NINESEATS
        TENSEATS
        FOGLAMP
        REARSPOILER
        WOODPANEL
        ROOFRAIL
        SIDESTEP
        GRILLGUARD
        REARENTERTAINMENT
        CRUISECONTROL
        BRAKERADAR
        SOFASEATS
        CLIMATECONTROL
      }
      images
    }
  }
`;
