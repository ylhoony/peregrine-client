import {
  // actions for fetching coutnry list
  FETCH_COUNTRIES_START,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_ERROR,

  // actions for fetching one country
  FETCH_COUNTRY_START,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_FAILURE,
  FETCH_COUNTRY_ERROR
} from "../actions/countriesActions";

const initialState = {
  countries: [],
  fetchCountriesLoading: false,
  fetchCountriesFailure: null,
  fetchCountriesError: null,

  selectedCountry: null,
  fetchCountryLoading: false,
  fetchCountryFailure: null,
  fetchCountryError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    // fetch country list
    case FETCH_COUNTRIES_START:
      return {
        ...state,
        fetchCountriesLoading: true
      };

    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload,
        fetchCountriesLoading: false
      };

    case FETCH_COUNTRIES_FAILURE:
      return state;

    case FETCH_COUNTRIES_ERROR:
      return state;

    // fetch one country
    case FETCH_COUNTRY_START:
      return {
        ...state,
        fetchCountryLoading: true
      };

    case FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        selectedCountry: action.payload,
        fetchCountryLoading: false
      };

    case FETCH_COUNTRY_FAILURE:
      return state;

    case FETCH_COUNTRY_ERROR:
      return state;

    default:
      return state;
  }
};
