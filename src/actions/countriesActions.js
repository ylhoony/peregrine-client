import axios from "axios";
import authentication from "../services/authentication";

// actions for fetching coutnry list
export const FETCH_COUNTRIES_START = "FETCH_COUNTRIES_START";
export const FETCH_COUNTRIES_SUCCESS = "FETCH_COUNTRIES_SUCCESS";
export const FETCH_COUNTRIES_FAILURE = "FETCH_COUNTRIES_FAILURE";
export const FETCH_COUNTRIES_ERROR = "FETCH_COUNTRIES_ERROR";

// actions for fetching one country
export const FETCH_COUNTRY_START = "FETCH_COUNTRY_START";
export const FETCH_COUNTRY_SUCCESS = "FETCH_COUNTRY_SUCCESS";
export const FETCH_COUNTRY_FAILURE = "FETCH_COUNTRY_FAILURE";
export const FETCH_COUNTRY_ERROR = "FETCH_COUNTRY_ERROR";

export default {
  fetchCountries: () => {
    return async dispatch => {
      dispatch({ type: FETCH_COUNTRIES_START });
      try {
        const res = await axios.get("/api/v1/countries", {
          headers: {
            Authorization: authentication.getEncodedToken()
          }
        });
        dispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: res.data });
      } catch (err) {
        dispatch({ type: FETCH_COUNTRIES_ERROR });
      }
    };
  },
  fetchCountry: countryId => {
    return async dispatch => {
      dispatch({ type: FETCH_COUNTRY_START });
      try {
        const res = await axios.get(`/api/v1/countries/${countryId}`, {
          headers: {
            Authorization: authentication.getEncodedToken()
          }
        });
        dispatch({ type: FETCH_COUNTRY_SUCCESS, payload: res.data });
      } catch (err) {
        dispatch({ type: FETCH_COUNTRY_ERROR });
      }
    };
  }
};
